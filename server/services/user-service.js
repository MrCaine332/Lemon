const UserModel = require("../models/user-model")
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const mailService = require("./mail-service")
const tokenService = require("./token-service")
const UserDto = require("../dtos/user-dto")
const ApiError = require("../exceptions/api-error")

class UserService {

    async registration(email, username, password) {
        const candidate = await UserModel.findOne({ email })
        if (candidate) {
            throw ApiError.BadRequest(`User with email ${email} already exists`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()

        const user = await UserModel.create({ email, username, password: hashPassword, activationLink })
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async login(login, password) {
        const user = await UserModel.findOne({$or: [{email: login}, {username: login}]})
        if (!user) {
            throw ApiError.BadRequest("User not found")
        }
        const isPasswordEqual = await bcrypt.compare(password, user.password)
        if (!isPasswordEqual) {
            throw ApiError.BadRequest("Wrong login or password")
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = tokenService.removeToken(refreshToken)
        return token
    }

    async resendActivationMail(email) {
        const user = UserModel.findOne({ email })
        if (!user) {
            throw ApiError.BadRequest("User not found")
        }
        const activationLink = uuid.v4()
        user.activationLink = activationLink
        // const user = await UserModel.findOneAndUpdate({email}, {activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        await user.save()
        const userDto = new UserDto(user)
        return {user: userDto}
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({ activationLink })
        if (!user) {
            throw ApiError.BadRequest("Incorrect activation link")
        }
        user.isActivated = true
        await user.save()
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)

        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

}

module.exports = new UserService()
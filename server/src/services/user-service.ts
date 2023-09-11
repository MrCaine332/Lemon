import {User} from "../entities/user.entity";
import {AppDataSource} from "../../data-source";
import {ApiError, ErrorsToSend} from "../exceptions/api-error";
import * as uuid from "uuid";
import * as bcrypt from "bcrypt";
import {LoginUserDto} from "../dtos/login-user-dto";
import tokenService from "./token-service";
import {JwtPayload} from "jsonwebtoken";
import {Request} from "express";
import mailService from "./mail-service";
import {Roles} from "../enums";

class UserService {

    async registration(email: string, username: string, password: string) {
        const candidateByEmail = await AppDataSource.getRepository(User)
            .findOneBy({ email: email || "" })
        const candidateByUsername = await AppDataSource.getRepository(User)
            .findOneBy({ username: username || "" })

        const errors: ErrorsToSend = {}
        if (candidateByEmail) {
            errors.email = { msg: "This email already in use" }
        }
        if (candidateByUsername) {
            errors.username = { msg: "This username already in use" }
        }

        if (Object.keys(errors).length > 0) {
            return { errors }
        }

        const user = new User()
        user.email = email
        user.username = username
        user.role = Roles.user

        const hashPassword = await bcrypt.hash(password, 3)
        user.password = hashPassword
        user.activationLink = uuid.v4()

        AppDataSource.getRepository(User).create(user)
        const createdUser = await AppDataSource.getRepository(User).save(user)

        return { user: createdUser }
    }

    async login(email: string, password: string, rememberMe: boolean) {
        const candidate = await AppDataSource.getRepository(User)
            .findOneBy({ email: email || "" })
        if (!candidate) {
            throw ApiError.BadRequest("Invalid email or password",
                { login: { msg: "Invalid email or password"} })
        }
        const isPasswordEqual = await bcrypt.compare(password, candidate.password)
        if (!isPasswordEqual) {
            throw ApiError.BadRequest("Invalid email or password",
                { login: { msg: "Invalid email or password"} })
        }

        const userDto = new LoginUserDto(candidate)
        const deviceId = uuid.v4()
        const tokens = tokenService.generateTokens({
            userId: userDto.id,
            email: userDto.email,
            username: userDto.username,
            role: userDto.role,
            deviceId: deviceId
        }, rememberMe ? "permanent" : "temporal")

        await tokenService.saveRefreshToken(candidate, tokens.refreshToken!, deviceId)

        return { user: userDto, tokens, deviceId }
    }

    async logout(deviceId: string) {
        const token = tokenService.deleteToken(deviceId)
        return token
    }

    async refresh(req: Request, refreshToken: string, deviceId: string) {
        if (!refreshToken || !deviceId) {
            throw ApiError.UnauthorizedError()
        }
        const payload = tokenService.validateToken(refreshToken, "REFRESH") as JwtPayload | null
        const tokenFromDb = await tokenService.findToken(refreshToken, deviceId)
        if (!payload || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }

        const user = await AppDataSource.getRepository(User).findOneBy({ id: payload.userId })
        if (!user) {
            throw ApiError.NotFound()
        }

        const userDto = new LoginUserDto(user)

        if (payload.temporal) {
            return {
                user: userDto,
                tokens: {
                    accessToken: req.headers.authorization!.split(" ")[1],
                    refreshToken: refreshToken
                },
                deviceId: deviceId
            }
        }

        const tokens = tokenService.generateTokens({
            userId: userDto.id,
            email: userDto.email,
            username: userDto.username,
            role: userDto.role,
            deviceId: deviceId
        }, "permanent")

        await tokenService.saveRefreshToken(user, tokens.refreshToken!, deviceId)

        return { user: userDto, tokens, deviceId }
    }


    async activate(activationLink: string) {
        const user = await AppDataSource.getRepository(User).findOneBy({ activationLink: activationLink })
        if (!user) {
            throw ApiError.NotFound()
        }

        user.isActivated = true
        await AppDataSource.getRepository(User).save(user)
    }


    async resendActivationMail(email: string) {
        const user = await AppDataSource.getRepository(User).findOneBy({ email: email })
        if (!user) {
            throw ApiError.NotFound()
        }
        const activationLink = uuid.v4()
        user.activationLink = activationLink
        await AppDataSource.getRepository(User).save(user)

        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/users/activate/${activationLink}`)
    }
}

export default new UserService()
const userService = require("../services/user-service")
const { validationResult } = require("express-validator")
const ApiError = require("../exceptions/api-error")

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest("Validation error", errors.array()))
            }

            const { email, username, password } = req.body
            const userData = await userService.registration(email, username, password)

            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const { login, password } = req.body
            const userData = await userService.login(login, password)

            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async resendActivationMail(req, res, next) {
        try {
            const { email } = req.body
            const userData = await userService.resendActivationMail(email)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            await userService.logout()
            res.clearCookie("refreshToken")
            return res.status(200)
        } catch (e) {
            next(e)
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const userData = await userService.refresh(refreshToken)

            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }

    }

    async getUsers(req, res, next) {
        try {
            res.json(["123", "456"])
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()
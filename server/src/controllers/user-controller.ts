import {validationResult} from "express-validator";
import {Request, Response, NextFunction} from "express";
import {ApiError} from "../exceptions/api-error";
import {User} from "../entities/user.entity";
import {AppDataSource} from "../../data-source";
import userService from "../services/user-service";

class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                throw ApiError.BadRequest("Validation error", errors.mapped())
            }

            const { email, username, password } = req.body
            const results = await userService.registration(email, username, password)

            if (results.errors) {
                throw ApiError.Conflict("Already in use", results.errors)
            }

            return res.sendStatus(201)
        } catch (e) {
            return next(e)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password, rememberMe } = req.body
            const results = await userService.login(email, password, rememberMe)

            res.cookie("refreshToken", results.tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.cookie("deviceId", results.deviceId, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json({ user: results.user, accessToken: results.tokens.accessToken })
        } catch (e) {
            return next(e)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const { deviceId } = req.cookies
            await userService.logout(deviceId)
            res.clearCookie("refreshToken")
            res.clearCookie("deviceId")
            return res.sendStatus(201)
        } catch (e) {
            return next(e)
        }
    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken, deviceId } = req.cookies
            const results = await userService.refresh(req, refreshToken, deviceId)

            res.cookie("refreshToken", results.tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.cookie("deviceId", results.deviceId, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json({ user: results.user, accessToken: results.tokens.accessToken })
        } catch (e) {
            return next(e)
        }
    }

    async activate(req: Request, res: Response, next: NextFunction) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect("http://localhost:3000/home")
        } catch (e) {
            return next(e)
        }
    }


    async resendActivationMail(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body
            await userService.resendActivationMail(email)
            return res.sendStatus(200)
        } catch (e) {
            console.log(e)
            return next(e)
        }
    }



    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await AppDataSource.getRepository(User).find()
            return res.json(users)
        } catch (e) {
            return next(e)
        }
    }
}

export default new UserController()
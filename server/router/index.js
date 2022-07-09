const Router = require("express").Router
const userController = require("../controllers/user-controller")
const router = new Router()
const { body } = require("express-validator")
const authMiddleware = require("../middlewares/auth-middleware")

// USER ROUTES
router.post("/registration",
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
    userController.registration)

router.post("/login",
    body("password").isLength({ min: 8}),
    userController.login)
router.post("/logout", userController.logout)
router.post("/resend", userController.resendActivationMail)
router.get("/activate/:link", userController.activate)
router.get("/refresh", userController.refresh)

router.get("/users", authMiddleware, userController.getUsers)

module.exports = router
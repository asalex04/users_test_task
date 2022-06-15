import userService from "../service/userService.js";

class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, name} = req.body
            const userData = await userService.registration(email, name, password)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = userService.login(email, password)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

}

export default new UserController()

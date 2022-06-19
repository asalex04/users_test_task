import userService from "../service/userService.js";
import path from "path";
import { v4 as uuidv4 } from 'uuid';

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
            const userData = await userService.login(email, password)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async getOneUser(req, res, next) {
        try {
            const {id} = req.params
            const userData = await userService.getOneUser(id)
            res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    async getUsers(req, res, next) {
        try {
            let { page, size } = req.query
            page = page || 1
            size = size || 10
            const userData = await userService.getUsers(Number(page), Number(size))
            res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    async updateUser(req, res, next) {
        try {
            const {id} = req.params
            if (req.files) {
                const { photo } = req.files
                const fileName = photo.name
                const extension = path.extname(fileName)
                const allowedExtensions = /png|jpg|jpeg/
                if (!allowedExtensions.test(extension)) throw 'Unsupported extension'
                if (photo.size > 10000000) throw 'File must be less than 10Mb'
                const filepath = path.resolve('static', fileName)
                await photo.mv(filepath)
            }

            const USER_MODEL = {
                name: req.body.name,
                email: req.body.email,
                lastName: req.body.lastName,
                photo: req.files.photo.name,
                gender: req.body.gender,
            }
            const userData = await userService.updateUser(id, USER_MODEL)
            res.json(userData)
        } catch (e) {
            next(e)
        }
    }
}

export default new UserController()

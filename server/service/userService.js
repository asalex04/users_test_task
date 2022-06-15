import User from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import ApiError from "../error/ApiError.js";

const generateJwt = (id, email, name) => {
    return jwt.sign(
        {id, email, name},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserService {
    async registration(name, email, password) {
        if (!email || !password) {
            return ApiError.badRequest("Wrong email or password")
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            throw ApiError.badRequest(`User with email: ${email} already exist`)
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, email, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.name)
        return token
    }
    async login(email, password) {
        const user = await User.findOne({where: {email}})
        if (!user) {
            return ApiError.badRequest(`User with email: ${email} not exist`)
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return ApiError.badRequest(`Wrong password`)
        }
        const token = generateJwt(user.id, user.email, user.name)
        return token
    }
}

export default new UserService()

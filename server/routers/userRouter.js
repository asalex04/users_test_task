import Router from 'express'
import userController from "../controllers/userController.js";
const router = new Router()

router.post('/user/register', userController.registration)
router.post('/user/login', userController.login)
// router.get('/profiles', userController.getUsers)
// router.put('/profiles/[id]', userController.change)
// router.get('/profiles/[id]', userController.getOneUser)

export default router

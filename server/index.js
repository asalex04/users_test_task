import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import sequelize from './db.js';
import User from "./models/user_model.js";
import router from "./routers/userRouter.js";
import errorHandler from './middleware/ErrorHandlingMiddleware.js'

const PORT = process.env.PORT || 5050

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
//Обработка ошибок
app.use(errorHandler)

const startApp = async () => {
    try {
        await sequelize.authenticate();
        await User.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

startApp()

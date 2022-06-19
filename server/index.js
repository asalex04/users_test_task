import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import sequelize from './db.js';
import router from "./routers/userRouter.js";
import errorHandler from './middleware/ErrorHandlingMiddleware.js'
import path from "path";

const PORT = process.env.PORT || 5050

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve('static')))
app.use(fileUpload({}))
app.use('/api', router)
//Обработка ошибок
app.use(errorHandler)

const startApp = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

startApp()

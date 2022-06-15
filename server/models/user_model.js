import sequelize from '../db.js'
import {DataTypes} from "sequelize";

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    name: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    photo: {type: DataTypes.STRING},
    data: {type: DataTypes.DATE},
    gender: {type: DataTypes.ENUM, values: ['муж', 'жен']}
})

export default User

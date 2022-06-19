import sequelize from '../db.js'
import {DataTypes} from "sequelize";

const User = sequelize.define('user', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {
            type: DataTypes.STRING, unique: true,
            validate: {isEmail: true}
        },
        name: {type: DataTypes.STRING},
        lastName: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING},
        photo: {type: DataTypes.STRING},
        myDate: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
        gender: {type: DataTypes.ENUM, values: ['male', 'female']}
    },
    {timestamps: false}
)

export default User

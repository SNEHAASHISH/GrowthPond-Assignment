import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class User extends Model {}

User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING // for authentication (hashed)
}, { sequelize, modelName: 'user' });

export default User;
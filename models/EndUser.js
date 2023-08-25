import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';

class EndUser extends Model {}

EndUser.init({
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { sequelize, modelName: 'endUser' });  // Note the modelName is camelCased

export default EndUser;

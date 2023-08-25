import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Chatbot from './Chatbot.js';
import EndUser from './EndUser.js';  // Import the EndUser model

class Conversation extends Model {}

Conversation.init({
    content: DataTypes.TEXT,
    status: {
        type: DataTypes.STRING,
        defaultValue: 'ongoing'  // set default value to "ongoing"
    },
    endUserId: {
        type: DataTypes.INTEGER,
        references: {
            model: EndUser,
            key: 'id'
        },
        allowNull: false
    }
    // ... any other fields you want
}, { sequelize, modelName: 'conversation' });

Conversation.belongsTo(Chatbot, { foreignKey: 'chatbotId', as: 'chatbot' });
Chatbot.hasMany(Conversation, { foreignKey: 'chatbotId', as: 'conversations' });

// Define relationship with EndUser
Conversation.belongsTo(EndUser, { foreignKey: 'endUserId', as: 'participant' });
EndUser.hasMany(Conversation, { foreignKey: 'endUserId', as: 'conversations' });

export default Conversation;

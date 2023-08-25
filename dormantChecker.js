import nodeCron from 'node-cron';
import { Op } from 'sequelize'; // Sequelize's Operators
import Conversation from './models/Conversation.js';

export const startDormantCheck = () => {
    nodeCron.schedule('0 * * * *', async () => {  // Run every hour
        try {
            // Calculate 2 days ago
            const twoDaysAgo = new Date(Date.now() - (2 * 24 * 60 * 60 * 1000));

            // Find all conversations that are ongoing and were last updated more than 2 days ago
            const conversations = await Conversation.findAll({
                where: {
                    status: 'ongoing',
                    updatedAt: {
                        [Op.lt]: twoDaysAgo
                    }
                }
            });

            // Update their status to "dormant"
            for (const convo of conversations) {
                convo.status = 'dormant';
                await convo.save();
            }

            console.log(`Updated ${conversations.length} conversations to dormant status.`);
        } catch (error) {
            console.error("Error in dormant check:", error);
        }
    });
}

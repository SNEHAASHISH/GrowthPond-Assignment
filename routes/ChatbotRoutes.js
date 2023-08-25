import { Router } from 'express';
import { createChatbotForUser, listChatbotsForUser, retrieveChatbot, updateChatbot, deleteChatbot, searchChatbots } from '../controllers/ChatbotController.js';

const router = Router();

router.post('/users/:userId/chatbots', createChatbotForUser);
router.get('/users/:userId/chatbots', listChatbotsForUser);
router.get('/chatbots/search', searchChatbots);
router.get('/chatbots/:chatbotId', retrieveChatbot);
router.put('/chatbots/:chatbotId', updateChatbot);
router.delete('/chatbots/:chatbotId', deleteChatbot);

export default router;

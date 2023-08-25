import { Router } from 'express';
import { startConversation, listConversations, retrieveConversation, updateConversation, deleteConversation, completeConversation } from '../controllers/ConversationController.js';

const router = Router();

router.post('/chatbots/:chatbotId/conversations', startConversation);
router.get('/chatbots/:chatbotId/conversations', listConversations);
router.put('/conversations/:conversationId/complete', completeConversation);
router.get('/conversations/:conversationId', retrieveConversation);
router.put('/conversations/:conversationId', updateConversation);
router.delete('/conversations/:conversationId', deleteConversation);

export default router;
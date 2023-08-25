import { Router } from 'express';
import { registerEndUser, listEndUsers, retrieveEndUser, updateEndUser, deleteEndUser, searchEndUsers } from '../controllers/EndUserController.js';

const router = Router();

router.post('/endusers', registerEndUser);
router.get('/endusers', listEndUsers);
router.get('/endusers/search', searchEndUsers);
router.get('/endusers/:endUserId', retrieveEndUser);
router.put('/endusers/:endUserId', updateEndUser);
router.delete('/endusers/:endUserId', deleteEndUser);

export default router;
import express from 'express';
import { completions } from '../Controllers/chatController.js';

const router = express.Router();

router.post('/completions', completions);

export default router;

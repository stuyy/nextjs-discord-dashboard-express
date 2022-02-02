import { Router } from 'express';
import authRouter from './auth';
import guildsRouter from './guilds';

const router = Router();

router.use('/auth', authRouter);
router.use('/guilds', guildsRouter);

export default router;

import { Router } from 'express';
import { getGuildsController } from '../../controllers/guilds';
import { isAuthenticated } from '../../utils/middlewares';
const router = Router();

router.get('/', isAuthenticated, getGuildsController);

export default router;

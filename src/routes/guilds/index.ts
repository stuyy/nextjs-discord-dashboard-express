import { Router } from 'express';
import {
  getGuildController,
  getGuildPermissionsController,
  getGuildsController,
} from '../../controllers/guilds';
import { isAuthenticated } from '../../utils/middlewares';
const router = Router();

router.get('/', isAuthenticated, getGuildsController);

// /api/guilds/123/permissions
router.get('/:id/permissions', isAuthenticated, getGuildPermissionsController);

router.get('/:id', isAuthenticated, getGuildController);

export default router;

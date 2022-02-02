import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(200);
});

export default router;

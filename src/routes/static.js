import { Router } from 'express';
const router = Router()
import path from 'path';

router.get('/', (req, res) => {
  res.render('index', { path: 'home' });
});

export default router;

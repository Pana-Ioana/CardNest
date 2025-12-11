import { Router } from "express";

const router = Router();

router.get('/api/health', (req, res) => {
  res.json({ message: 'API is healthy',
    status: 'ok',
  timestamp: new Date().toISOString() });
});

export default router;
import { Router } from 'express';

import api from './api';

const router = Router();

// V1 routes
router.use('/api', api);

export default router;

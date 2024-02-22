import { Router } from 'express';
import userRouter from './user.routes.js';
import authRouter from './auth.routes.js';
const router = Router();
router.use(authRouter)
router.use(userRouter);
export default router;


import { Router } from "express";
import chatRouter from "./chat.routes.js";
import postRouter from "./post.routes.js";
import userRouter from "./user.routes.js";

const router = Router();

router.use('', userRouter);

router.use("/api/post", postRouter)

router.use("/api/chat", chatRouter)



export default router;


import { Router } from "express";
import chatRouter from "./chat.routes.js";
import postRouter from "./post.routes.js";
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js";
import commentRouter from "./comment.routes.js";
import messageRouter from "./message.routes.js";

const router = Router();

router.use('', userRouter);

router.use("/api/post", postRouter)

router.use("/api/chat", chatRouter)

router.use("/api/comment", commentRouter)

router.use("/api/message", messageRouter)



router.use(authRouter)



export default router;

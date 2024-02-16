import { Router } from "express";
import topicRouter from "./topic.routes.js"
import subtopicRouter from "./subtopic.routes.js";
import urlRouter from "./url.routes.js";
import userRouter from "./user.routes.js";

const router = Router();

router.use('', subtopicRouter);

router.use("/api/topic", topicRouter)

router.use("/api/url", urlRouter)

router.use("/api/users", userRouter)


export default router;

import { Router } from "express";
import itemRouter from "./ItemRouter.js";
import authRouter from "./authRouter.js";

const router = Router()

router.use(itemRouter)
router.use(authRouter)

export default router
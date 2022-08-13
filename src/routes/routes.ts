import { Router } from "express";
import itemRouter from "./ItemRouter.js";
import authRouter from "./authRouter.js";
import offersRouter from "./offersRouters.js"

const router = Router()

router.use(itemRouter)
router.use(authRouter)
router.use(offersRouter)

export default router
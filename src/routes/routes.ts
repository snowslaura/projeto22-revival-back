import { Router } from "express";
import itemRouter from "./ItemRouter.js";

const router = Router()

router.use(itemRouter)

export default router
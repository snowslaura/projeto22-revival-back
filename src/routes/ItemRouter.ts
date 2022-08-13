import { Router } from "express"
import {getItem, getLatestItems, getUserItems, postItem} from "./../controllers/itemController.js"
import upload from "../config/multer.js"
import { AuthenticatedMiddleware } from "../middleware/authMiddleware.js"

const itemRouter = Router()

itemRouter.post("/items", AuthenticatedMiddleware, upload.single('file'), postItem )
itemRouter.get("/items", getItem)
itemRouter.get("/latestitems", getLatestItems)

itemRouter.get("/userItems/:id",AuthenticatedMiddleware, getUserItems)

export default itemRouter;
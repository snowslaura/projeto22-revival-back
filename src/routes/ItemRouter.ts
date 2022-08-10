import { Router } from "express"
import {getItem, getLatestItems, postItem} from "./../controllers/itemController.js"
import upload from "../config/multer.js"


const itemRouter = Router()

itemRouter.post("/items", upload.single('file'), postItem )
itemRouter.get("/items", getItem)
itemRouter.get("/latestitems", getLatestItems)


export default itemRouter;
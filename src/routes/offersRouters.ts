import { Router } from "express"
import { getUserItemWithOffers, getUserOffers, postOffers } from "../controllers/offerController.js"
import { AuthenticatedMiddleware } from "../middleware/authMiddleware.js"

const offersRouter = Router()

offersRouter.post("/offers/:itemId", AuthenticatedMiddleware, postOffers )
offersRouter.get("/receivedOffers/:userId", AuthenticatedMiddleware, getUserItemWithOffers )
offersRouter.get("/givenOffers/:userId", AuthenticatedMiddleware, getUserOffers )

export default offersRouter;
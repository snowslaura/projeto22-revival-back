import { Router } from "express";
import { validateSchemaMiddleware } from "../middleware/schemaMiddleware.js";
import { userSchemaSignIn, userSchemaSignUp } from "../schemas/userSchema.js"
import {signIn, signUp} from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(userSchemaSignUp), signUp);
authRouter.post("/signin", validateSchemaMiddleware(userSchemaSignIn), signIn);

export default authRouter;
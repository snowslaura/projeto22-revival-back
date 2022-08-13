import express,{json, urlencoded} from "express";
import "express-async-errors";
import cors from "cors"
import router from "./routes/routes.js";
import multer from "multer"
import handleErrorsMiddleware from "./middleware/handleErrorsMiddleware.js";

const app = express();
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true}))
app.use(router)
app.use(handleErrorsMiddleware);

export default app;

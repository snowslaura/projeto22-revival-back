import express,{json, urlencoded} from "express";
import cors from "cors"
import router from "./routes/routes.js";
import multer from "multer"

const app = express();
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true}))
app.use(router)
export default app;

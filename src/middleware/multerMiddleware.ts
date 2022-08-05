import { NextFunction, Request, Response } from "express";
import upload from "../config/multer";

export default function multerMiddleware (req:Request, res:Response, next:NextFunction){
    upload.single('file')
}
import { Request, Response } from "express"
import * as itemService from "./../services/itemService.js"


export async function postItem(req: Request, res: Response){
    const priceRangeId = parseInt(req.body.priceRangeId)  
    const {location : imageUrl, size, originalname:name} = req.file as Express.MulterS3.File  
    
    const dados = {
        imageUrl,
        size,
        name,
        priceRangeId
    }        
    await itemService.postItem(dados)
    res.sendStatus(201)
}

export async function getItem(req: Request, res: Response){
    const itens = await itemService.getItem()
    res.send(itens)
}
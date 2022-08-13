import { Request, Response } from "express"
import * as itemService from "./../services/itemService.js"


export async function postItem(req: Request, res: Response){
    const priceRangeId = parseInt(req.body.priceRangeId)
    
    const categoryId = parseInt(req.body.categoryId)
    const userId = res.locals.user.id   
    const {location : imageUrl, size, originalname:name} = req.file as Express.MulterS3.File     
    

    const dados = {
        imageUrl,
        size,
        name,
        priceRangeId,
        userId,
        categoryId
    } 
    
    await itemService.postItem(dados)
    res.sendStatus(201)
}

export async function getItem(req: Request, res: Response){
    const itens = await itemService.getItem()
    res.send(itens)
}

export async function getUserItems(req: Request, res: Response){
    const id = parseInt(req.params.id)
    const itens = await itemService.getUserItems(id)
    res.send(itens)
}


export async function getLatestItems(req: Request, res: Response){
    const itens = await itemService.getLatestItems()
    res.send(itens)
}
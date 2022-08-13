import { Request, Response } from "express"
import * as offerService from "./../services/offerService.js"


export async function postOffers(req: Request, res: Response){  
    const itemId = parseInt(req.params.itemId)
    const {offerUserId,offerItemId} = req.body
    const data = {
        itemId,
        offerUserId,
        offerItemId
    }
    await offerService.postOffers(data)
    res.sendStatus(201)
}

export async function getUserItemWithOffers(req: Request, res: Response){
    const userId = parseInt(req.params.userId)
    const offers = await offerService.getUserItemWithOffers(userId)
    res.send(offers)
}


export async function getUserOffers(req: Request, res: Response){
    const userId = parseInt(req.params.userId)
    const offers = await offerService.getUserOffers(userId)
    res.send(offers)
}
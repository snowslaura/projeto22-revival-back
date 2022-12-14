import prisma from "../config/database.js"
import { CreateOffer } from "../types/Offer.js"


export async function postOffer(dados:CreateOffer){
    await prisma.offers.create({
        data: dados
    })
}


export async function getUserItemWithOffers(userId:number){
    return await prisma.items.findMany({
        where:{
            userId,
            userItemId:{
                some:{                    
                }
           }
        }, include:{
            userItemId:{
                select:{
                    id:true,
                    itemId:true,
                    offerUserId:true,
                    offerItemId:true,
                    createdAt:true
                }, 

            }
        }
    })
}

export async function getUserOffers(userId:number){
    return await prisma.offers.findMany({
        where:{           
            offerUserId: userId
        }, include:{
            itemOffer:true
        }
    })
}
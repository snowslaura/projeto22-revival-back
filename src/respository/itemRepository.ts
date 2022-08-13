import prisma from "../config/database.js"
import { CreateItem } from "../types/Item.js";


export async function postItem(dados:CreateItem){
 await prisma.items.create({
    data: dados
 })
}

export async function getItem(){
    return await prisma.items.findMany({})
}

export async function getUserItems(id:number){
    return await prisma.items.findMany({
        where:{
            userId:id
        }
    })
}

export async function getLatestItems(){
    return await prisma.items.findMany({
        where:{},
        orderBy:{
            createdAt: 'desc'
        },
        take: 5
        
    })
}
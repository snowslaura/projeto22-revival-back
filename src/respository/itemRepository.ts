import { Items } from "@prisma/client";
import prisma from "../config/database.js"

export type CreateItem = Omit<Items, "id" | "createdAt">

export async function postItem(dados:CreateItem){
 await prisma.items.create({
    data: dados
 })
}

export async function getItem(){
    return await prisma.items.findMany({})
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
import * as itemRepository from "../respository/itemRepository.js"
import { CreateItem } from "../types/Item.js"

export async function postItem(dados:CreateItem){
    await itemRepository.postItem(dados)
}

export async function getItem(){
  return  await itemRepository.getItem()
}

export async function getUserItems(id:number){
  return  await itemRepository.getUserItems(id)
}

export async function getLatestItems(){
  return  await itemRepository.getLatestItems()
}
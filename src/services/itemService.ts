import * as itemRepository from "../respository/itemRepository.js"

export async function postItem(dados){
    await itemRepository.postItem(dados)
}

export async function getItem(){
  return  await itemRepository.getItem()
}

export async function getLatestItems(){
  return  await itemRepository.getLatestItems()
}
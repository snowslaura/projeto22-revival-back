import * as itemRepository from "./../respoitory/itemRepository.js"

export async function postItem(dados){
    await itemRepository.postItem(dados)
}

export async function getItem(){
    await itemRepository.getItem()
}
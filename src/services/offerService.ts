import * as offerRepository from "../respository/offerRepository.js"
import { CreateOffer } from "../types/Offer.js"

export async function postOffers(dados: CreateOffer){
  await offerRepository.postOffer(dados)
}

export async function getUserItemWithOffers(userId: number){
  return  await offerRepository.getUserItemWithOffers(userId)
}

export async function getUserOffers(userId: number){
  return  await offerRepository.getUserOffers(userId)
}
import { Offers } from "@prisma/client";

export type CreateOffer = Omit<Offers, "id" | "createdAt">
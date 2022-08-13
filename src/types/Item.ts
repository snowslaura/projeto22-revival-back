import { Items } from "@prisma/client";

export type CreateItem = Omit<Items, "id" | "createdAt">
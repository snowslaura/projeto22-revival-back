import { Users } from "@prisma/client";

export type CreateUserData = Omit<Users, "id" | "createdAt">;

export type LoginUserData = Omit<Users, "id" | "name" |"createdAt" >
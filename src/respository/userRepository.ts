import  prisma  from "./../config/database.js";
import {CreateUserData} from "../types/User.js"

export async function findById(id: number) {
  return prisma.users.findUnique({
    where: { id }
  });
}

export async function findUserByEmail(email: string) {
  return prisma.users.findUnique({
    where: {
      email,
    },
  });
}

export async function insertUser(user: CreateUserData) {
  return prisma.users.create({
    data: user,
  });
}
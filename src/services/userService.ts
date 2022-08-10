import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import {CreateUserData, LoginUserData} from "../types/User.js"

import * as userRepository from "../respository/userRepository.js";
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils.js";

async function createUser(user: CreateUserData) {
  console.log(user);
  const existingUser = await userRepository.findUserByEmail(user.email);

  if (existingUser) {
    throw conflictError();
  }

  const SALT = parseInt(process.env.SALT);
  const hashedPassword = bcrypt.hashSync(user.password, SALT);
  await userRepository.insertUser({...user, password: hashedPassword});
}

async function login(login: LoginUserData) {
  const user = await getUserOrFail(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  return token;
}

async function getUserOrFail(login: LoginUserData) {
  const user = await userRepository.findUserByEmail(login.email);
  if (!user) throw unauthorizedError("Invalid credentials");

  const isPasswordValid = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordValid) throw unauthorizedError("Invalid credentials");

  return user;
}

async function findUserById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) throw notFoundError("User not found");

  return user;
}

const authService = {
  createUser,
  login,
  findUserById
}

export default authService;
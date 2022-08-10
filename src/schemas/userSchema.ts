import Joi from "joi";
import {CreateUserData, LoginUserData} from "../types/User.js"

export const userSchemaSignIn = Joi.object<LoginUserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

export const userSchemaSignUp = Joi.object<CreateUserData>({
  name:Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});
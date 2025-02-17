import Joi from "joi";
import { RoleEnum } from "../enum";

export const signupValidator =Joi.object({
  name:Joi.string().required(),
  email:Joi.string().email().required(),
  role:Joi.string().valid(RoleEnum.admin,RoleEnum.user).optional(),
  password:Joi.string().required()
})

export const loginValidator = Joi.object({
  email : Joi.string().email().required(),
  password: Joi.string().required(),
})
import { Request } from "express";
import { UserInterface } from "./userinterface";

export interface CustomRequestInterface extends Request{
    user:UserInterface
}
import { Request, Response } from "express";
import { NextFunction } from "express";
import { jwtSecret } from "../config";
import jwt from 'jsonwebtoken';
import { CustomRequestInterface, UserInterface } from "../interfaces";
import { Next } from "mysql2/typings/mysql/lib/parsers/typeCast";

export class Guard {
    public static grantAccess (req: CustomRequestInterface ,res:Response ,next :NextFunction){
      
            const accessToken = req.headers.authorization?.split(" ")[1];
            if(!accessToken)
                return res.status(500).json({
            success : false,
             message : "provide n access token"
        })
        const decodedToken = jwt.verify(accessToken,jwtSecret);
        if(!decodedToken)
            return res.status(500).json({
          success : false,
         message : "provide n access token"
         })

             req.user = decodedToken as UserInterface;
             next();

      }


      public static grantRole(role:string){
            return (req: CustomRequestInterface ,res:Response ,next :NextFunction) =>{
                if(req.user.role === role){
                    next();
                }else{
                    return res.status(400).json({
                        message:"you are not authorized to perform this task"
                    })
                }
            }
      }
}
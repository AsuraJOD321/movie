import { Request,Response } from "express";
import bcrypt from 'bcrypt';

import { userServices } from "../../services";

import { date } from "joi";

import { doesNotMatch } from "assert";

import { jwtSecret } from "../../config";
import jwt from 'jsonwebtoken';
export class AuthController {
    public static async signup(req:Request,res:Response) : Promise<Response>{
        const userData = req.body;

        const userExists =await new userServices().findOne(userData.email);

        if ( userExists ){
            return res.json(500).json({
                message: `user with email : ${userData.email} already exists!`,
                success:false,
            })
        }
    const hashedPassword = await bcrypt.hash(userData.password,12);

    const user = await new userServices().create({
         name : userData.name,
         email: userData.email,
         password: hashedPassword,
         role: userData.role,

    });

        return res.status(200).json({
            success:true,
            status:200,
             message:('signup successfull. you can proceed to login.'),  
             
             date:user,
        })

  
    } 
    
      public static async login(req: Request , res: Response) : Promise<Response> { 
       const userData= req.body;
              
       const  userExists = await new userServices().findOne(userData.email);
       if (!userExists) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or password!",
        });
      }
      const doesPasswordMatch = bcrypt.compare(userData.password,userExists.password);
      if(!doesPasswordMatch){
        return res.status(500).json({
            message :"invalid password",
            success:false,
        });
      }
      const accessToken = jwt.sign({
        id:userExists.id,
        email:userExists.email,
        name:userExists.name,
        role:userExists.role
      },jwtSecret,{expiresIn:'1d'});

      return res.status(200).json({
        message: 'user logged in successfully.',
        success: true,
        data: {
            accessToken,
        }
      });
    }
}
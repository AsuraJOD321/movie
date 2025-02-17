import {InputUserInterface, UserInterface} from "../interfaces";
import Model from "../models";

export class userServices{
    public async findOne(email:string):Promise< UserInterface | null >{
        const data = await Model.User.findOne({
            where : {
                email:email,
            },
            raw: true,
        });
        return data;
    } 
    public async create(data: InputUserInterface): Promise<UserInterface>{
        const user = await Model.User.create(data);
        return user;
    }
}
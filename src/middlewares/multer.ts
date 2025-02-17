import multer , {StorageEngine} from 'multer';
import { Request,Response,NextFunction } from 'express';

import path from 'path';
 export class Multer{
    public storage : StorageEngine;

    constructor (){
        this.storage = multer.diskStorage({
            destination(req,file,callback){
                   callback(null,path.join(__dirname,'../../uploads'));
            },
            filename(req, file, callback) {
                const filename = `${Date.now()}-${file.originalname}`;

                callback(null,filename);
            },
        });
    }


    public uploadSingle=(filedName:string) => {
        return(req:Request,res:Response,next:NextFunction)=>{
            const upload = multer({
         storage: this.storage,
            }).single(filedName);

            upload(req,res,(err:any) =>{

                if(err){
                    res.status(400).json({error: err.message});
                    return;
                }
                next();
            });


        };
    }
}

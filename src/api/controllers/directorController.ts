import { Request,Response } from "express";

import { DirectorService } from "../../services";


export class DirectorController{

  public constructor(){}

  //get
   static async get(req:Request,res:Response): Promise<Response> {
    
      const directors=await new DirectorService().findAll();
     return res.status(200).json({
        success:true,
        status:200,
        message:"Director fetched successfully.",
        data: directors,
      });
   
  }

  //create
  public static async create(req:Request,res:Response): Promise<Response> {

    const playload = req.body;

    const directors=await new DirectorService().create(playload);
   return res.status(200).json({
      success:true,
      status:200,
      message:"Director fetched successfully.",
      data: directors,
    });
  }

  //update

  public static async update(req:Request,res:Response): Promise<Response>{
    const id = req.params.id as unknown as number;
    const data =req.body;

    const update=await new DirectorService().update(id,data);

    if(update === false){
      throw new Error(`couldnot update director with id ${id}`)
    }
    return res.status(200).json({
      success:true,
      status:200,
      message:"Directors updated successfully.",
    });
}

//delete

public static async delete(req:Request,res:Response): Promise<Response>{
  const id =parseInt(req.params.id);
  await new DirectorService().delete(id);
  return res.status(200).json({
    success:true,
    status:200,
    message:"Directors deleted successfully.",
  });
}

//find one
public static async findOne(req:Request,res:Response): Promise<Response>{
  const director =await new DirectorService().findOne(parseInt(req.params.id));
  
  return res.status(200).json({
    success:true,
    status:200,
    message:"Director fetched successfully.",
    data: director,
  });
}

}
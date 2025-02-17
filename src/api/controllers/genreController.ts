import { Request,Response } from "express";

import { GenreService } from "../../services";


export class GenreController{

  public constructor(){}

  //get
   static async getGenres(req:Request,res:Response): Promise<Response> {
    
      const genres=await new GenreService().findAll();
     return res.status(200).json({
        success:true,
        status:200,
        message:"Genres fetched successfully.",
        data: genres,
      });
   
  }

  //create
  public static async createGenres(req:Request,res:Response): Promise<Response> {

    const data = req.body;

    const genres=await new GenreService().create(data);
   return res.status(200).json({
      success:true,
      status:200,
      message:"Genres fetched successfully.",
      data: genres,
    });
  }

  //update

  public static async updateGenres(req:Request,res:Response): Promise<Response>{
    const id = req.params.id as unknown as number;
    const data =req.body;

    const update=await new GenreService().update(id,data);

    if(update === false){
      throw new Error(`couldnot update genre with id ${id}`)
    }
    return res.status(200).json({
      success:true,
      status:200,
      message:"Genres updated successfully.",
    });
}

//delete

public static async deleteGenres(req:Request,res:Response): Promise<Response>{
  const id =parseInt(req.params.id);
  await new GenreService().delete(id);
  return res.status(200).json({
    success:true,
    status:200,
    message:"Genres deleted successfully.",
  });
}
}

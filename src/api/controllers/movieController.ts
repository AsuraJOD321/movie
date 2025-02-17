import { Request,Response } from "express";

import { MovieService } from "../../services";
import { off } from "process";

import { CategoryType } from "../../interfaces";

export class movieController{

  public constructor(){}

  //get
   static async get(req:Request,res:Response): Promise<Response> {
      console.log(req.query);
      const page = req.query.page ? +req.query.page :1 ;
      const limit = req.query.limit ? +req.query.limit :2;
      const category = req.query.category as string | undefined;
      const genreId = req.query.genreId ?req.query.genreId as string : undefined;



      //calculate your offset based on the page number and limit
       // offset based pagination
      const offset = (page -1 ) * limit;
      const searchQuery = req.query.searchQuery as string;


      const movies=await new MovieService().findAll({
        offset: offset,
        limit:limit,
        order:'id',
        sort:'asc',
        searchQuery:searchQuery,
        genreId : genreId,
        category:category as CategoryType
      });
     return res.status(200).json({
        success:true,
        status:200,
        message:"Movie fetched successfully.",
        data: movies,
      });
   
  }

  //create
  public static async create(req:Request,res:Response): Promise<Response> {

    const playload = req.body;

    if(req.file){
      playload.thumbnail = req.file.path;
    }

    const movies=await new MovieService().create(playload);
   return res.status(200).json({
      success:true,
      status:200,
      message:"Movie fetched successfully.",
      data: movies,
    });
  }

  //update

  public static async update(req:Request,res:Response): Promise<Response>{
    const id = req.params.id as unknown as number;
    const data =req.body;

    const update=await new MovieService().update(id,data);

    if(update === false){
      throw new Error(`couldnot update movie with id ${id}`)
    }
    return res.status(200).json({
      success:true,
      status:200,
      message:"Movies updated successfully.",
    });
}

//delete

public static async delete(req:Request,res:Response): Promise<Response>{
  const id =parseInt(req.params.id);
  await new MovieService().delete(id);
  return res.status(200).json({
    success:true,
    status:200,
    message:"Movies deleted successfully.",
  });
}

//find one
public static async findOne(req:Request,res:Response): Promise<Response>{
  const movie =await new MovieService().findOne(parseInt(req.params.id));
  
  return res.status(200).json({
    success:true,
    status:200,
    message:"Movie fetched successfully.",
    data: movie,
  });
}

}
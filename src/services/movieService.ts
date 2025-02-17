import Models from "../models";
import { MovieInterface, InputMovieInterface ,ArgsMovieInterface} from "../interfaces";
import { where } from "sequelize";
import { Op } from "sequelize";

export class MovieService{

  //get
  public async findAll(arg:ArgsMovieInterface) : Promise<MovieInterface[]>{
   
   let where;
   if(arg.searchQuery){
    where ={
      title:{
        [Op.like]: `%${arg.searchQuery}%`,
      },
    };
   }
   
   if(arg.category){
    switch(arg.category){
      case 'latest':
         //condition release adter 2024
         const date = '2024-01-01'
          where = {
          ...where,
          releasedAt: {
            [Op.gt] : date
          }
          }
        break;
      case 'popular':
        //conditio whose rating is over 8.00

        const baseImdbScore ='7'
          where ={
            ...where,
            imdbScore:{
              [Op.gte] : baseImdbScore
            }
          }
        break;

        case 'top-rated':
          const baseRating = '8.0'
          where = {
          ...where,
          avgRating: {
            [Op.gte] : baseRating
          }
          }
          break;
    }
   }

   if(arg.genreId){
         where ={
          ...where,
          genreId: parseInt(arg.genreId)
         }
   }
   
    const data =  await Models.Movie.findAll();
    offset: arg.offset;
    limit:arg.limit;
    order:[[arg.order,arg.sort]]
    return data;
  }

  //find one by id 
  public async findOne(id:number):Promise<MovieInterface>{
    const data=await Models.Movie.findByPk(id);
    if(!data){
      throw new Error(`Movie doesnot exist for id:${id}`)
    }
    return data;
  }

  //create
  public async create(data :InputMovieInterface): Promise<MovieInterface>{
    const movie = await Models.Movie.create(data);
      return movie;
  }

  //update
public async update(id:number,data :InputMovieInterface): Promise<boolean>{
const update=await Models.Movie.update(data,{
  where:{
    id:id
  }
});
return update[0]===0? false :true;
}

//delete
public async delete(id:number){
  const deleted=await Models.Movie.destroy({
    where:{
      id:id
    }
  });
return deleted;
}


}
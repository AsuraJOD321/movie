import Models from "../models";
import { GenreInterface, InputGenreInterface } from "../interfaces";
import { where } from "sequelize";

export class GenreService{

  //get
  public async findAll() : Promise<GenreInterface[]>{
    const data =  await Models.Genre.findAll();
    return data;
  }

  //create
  public async create(data :InputGenreInterface): Promise<GenreInterface>{
    const genre = await Models.Genre.create(data);
      return genre;
  }

  //update
public async update(id:number,data :InputGenreInterface): Promise<boolean>{
const update=await Models.Genre.update(data,{
  where:{
    id:id
  }
});
return update[0]===0? false :true;
}

//delete
public async delete(id:number){
  const deleted=await Models.Genre.destroy({
    where:{
      id:id
    }
  });
return deleted;
}
}


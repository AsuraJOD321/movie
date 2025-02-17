import Models from "../models";
import { DirectorInterface, InputDirectorInterface } from "../interfaces";
import { where } from "sequelize";

export class DirectorService{

  //get
  public async findAll() : Promise<DirectorInterface[]>{
    const data =  await Models.Director.findAll();
    return data;
  }

  //find one by id 
  public async findOne(id:number):Promise<DirectorInterface>{
    const data=await Models.Director.findByPk(id);
    if(!data){
      throw new Error(`Director doesnot exist for id:${id}`)
    }
    return data;
  }

  //create
  public async create(data :InputDirectorInterface): Promise<DirectorInterface>{
    const director = await Models.Director.create(data);
      return director;
  }

  //update
public async update(id:number,data :InputDirectorInterface): Promise<boolean>{
const update=await Models.Director.update(data,{
  where:{
    id:id
  }
});
return update[0]===0? false :true;
}

//delete
public async delete(id:number){
  const deleted=await Models.Director.destroy({
    where:{
      id:id
    }
  });
return deleted;
}


}

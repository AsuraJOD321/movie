import * as Sequelize from "sequelize";

import { Database } from "../config";
import { RoleEnum } from "../enum/roleEnum";
import { UserInterface, UserModelInterface } from "../interfaces";
const sequelize=Database.sequelize;

const User=sequelize.define<UserModelInterface>("users",{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
   allowNull: false,
  },
  email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull:false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role:{
    type: Sequelize.ENUM(RoleEnum.admin,RoleEnum.user),
        allowNull: true,
        defaultValue:RoleEnum.user,
  }
},
{
  timestamps:false,
 
}

);

export default User;
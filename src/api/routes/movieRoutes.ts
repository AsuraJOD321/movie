import { Router } from "express";
import { movieController } from "../controllers";
import { exceptionHandler,validator,Multer } from "../../middlewares";
import { createMovie } from "../../validators";
import { Guard } from "../../middlewares/guard";
import { RoleEnum } from "../../enum";

const movieRoutes =Router();


movieRoutes.get('/',exceptionHandler(movieController.get));

movieRoutes.post('/',
    
    exceptionHandler(Guard.grantAccess),
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(new Multer().uploadSingle('file')),
    exceptionHandler(validator.check(createMovie)),
    exceptionHandler(movieController.create));

movieRoutes.patch('/:id',exceptionHandler(movieController.update));

movieRoutes.delete('/:id',exceptionHandler(movieController.delete));

movieRoutes.get('/:id',exceptionHandler(movieController.findOne));

export default movieRoutes;
import { Router } from "express";
import { DirectorController} from "../controllers";
import { exceptionHandler , validator } from "../../middlewares";
import { createDirector } from "../../validators";
import { Guard } from "../../middlewares/guard";
import { RoleEnum } from "../../enum";

const directorRoutes =Router();


directorRoutes.get('/',exceptionHandler(DirectorController.get));

directorRoutes.post('/',
    exceptionHandler(validator.check(createDirector)),
    exceptionHandler(DirectorController.create));

directorRoutes.patch('/:id',
    exceptionHandler(Guard.grantAccess),
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(DirectorController.update));

directorRoutes.delete('/:id',exceptionHandler(DirectorController.delete));

directorRoutes.get('/:id',exceptionHandler(DirectorController.findOne));

export default directorRoutes;
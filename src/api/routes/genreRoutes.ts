import {Router} from 'express';

import { GenreController } from '../controllers';
import { exceptionHandler,validator } from '../../middlewares';
import { createGenre } from '../../validators';
import { Guard } from '../../middlewares/guard';
import { RoleEnum } from '../../enum';


const genreRoutes = Router();
 genreRoutes.get('/', exceptionHandler(GenreController.getGenres));
 genreRoutes.post('/',
    exceptionHandler(Guard.grantAccess),
    exceptionHandler(Guard.grantRole(RoleEnum.admin)),
    exceptionHandler(validator.check(createGenre)),
    exceptionHandler(GenreController.createGenres)
);
 genreRoutes.put('/:id',exceptionHandler(GenreController.updateGenres));
 genreRoutes.delete('/:id',exceptionHandler(GenreController.deleteGenres));


export default genreRoutes ;
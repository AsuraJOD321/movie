import {Router} from 'express';
import { exceptionHandler,validator } from '../../middlewares';
import { AuthController } from '../controllers/authController';
import {loginValidator, signupValidator} from '../../validators'



 const authRoutes= Router();

authRoutes.post('/signup',
       exceptionHandler(validator.check(signupValidator)),
       exceptionHandler(AuthController.signup)
)
authRoutes.post('/login',
   exceptionHandler(validator.check(loginValidator)), 
   exceptionHandler(AuthController.login)
)

export default authRoutes;
import {Router,Request,Response} from 'express';

import { AuthUserController } from './controllers/user/AuthUserController';
import {CreateUserController} from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import {isAuthenticated} from '../src/middlewares/isAuthenticated'
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

const router = Router();

//rotas user:

router.post('/users',new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/me', isAuthenticated, new DetailUserController().handle);

//Rotas Category:

router.post('/category',isAuthenticated,new CreateCategoryController().handle);

router.get('/category',isAuthenticated,new ListCategoryController().handle);

export {router};
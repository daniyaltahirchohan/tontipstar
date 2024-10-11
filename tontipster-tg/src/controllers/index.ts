import express from 'express';
const router = express.Router();

import { getFixturesController } from './fixture';
import { createUserController } from './user';
import joiMiddleware from '../middlewares/joi_middleware';
import userSchema from '../validations/user';
import { createBetController, getOpenBetsController } from './bet';
import betSchema from '../validations/bet';

router.get('/fixtures', getFixturesController);
router.post('/user/create',joiMiddleware(userSchema.createUser), createUserController);
router.post('/bet/create',joiMiddleware(betSchema.createBet), createBetController);
router.get('/bet/open', getOpenBetsController);


export default router;
import { Request, Response } from 'express';
import { createBet, getOpenBets } from '../queries/bet';
import SuccessHandler from '../helpers/successHandler';
import ErrorHandler from '../helpers/errHandler';
import { getUser, getUserById } from '../queries/user';
import { getFixture } from '../queries/fixture';

export async function createBetController(req: Request, res: Response) {
    try {
        const bet = req.body;
        const existingUser = await getUserById(bet.creatorId);
        if (!existingUser) {
            return ErrorHandler.serverResponse(res, "User with creatorId not found", 400);
        }
        const existingFixture = await getFixture(bet.fixtureId);
        if (!existingFixture) {
            return ErrorHandler.serverResponse(res, "Fixture not found", 400);
        }
        bet.expiryDate = new Date(bet.expiryDate);
        const newBet = await createBet(bet);
        return SuccessHandler.successWithData(
            res,
            200,
            newBet
        )
    } catch (error) {
        console.log(error);
        return ErrorHandler.serverResponse(res, "Error creating bet", 500);
    }
}


export async function getOpenBetsController(req: Request, res: Response) {
    try {
        const openBets = await getOpenBets();
        return SuccessHandler.successWithData(
            res,
            200,
            openBets
        )
    } catch (error) {
        console.log(error);
        return ErrorHandler.serverResponse(res, "Error getting open bets", 500);
    }
}
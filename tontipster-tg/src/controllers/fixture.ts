import { Request, Response } from 'express';
import { getFixtures } from '../queries/fixture';
import SuccessHandler from '../helpers/successHandler';
import ErrorHandler from '../helpers/errHandler';

export async function getFixturesController(req: Request, res: Response) {
    try {
        const fixtures = await getFixtures();
        return SuccessHandler.successWithData(
            res,
            200,
            fixtures
        )
    } catch (error) {
        console.log(error);
        return ErrorHandler.serverResponse(
            res,
            "Error getting fixtures",
            500
        )
    }
}
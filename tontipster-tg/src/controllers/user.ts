import { Request, Response } from 'express';
import { createUser, getUser } from '../queries/user';
import SuccessHandler from '../helpers/successHandler';
import ErrorHandler from '../helpers/errHandler';

export async function createUserController(req: Request, res: Response) {
    try {
        const user = req.body;
        const existingUser = await getUser(user);
        if (existingUser) {
            return SuccessHandler.successWithMessageAndData(
                res,
                200,
                "User already exists",
                {
                    user: existingUser,
                    newUser: false,
                }
            )
        }
        const newUser = await createUser(user);
        return SuccessHandler.successWithMessageAndData(
            res,
            200,
            "User created successfully",
            {
                user: newUser,
                newUser: true,
            }
        )
    } catch (error) {
        console.log(error);
        return ErrorHandler.serverResponse(res, "Error creating user", 500);
    }
}
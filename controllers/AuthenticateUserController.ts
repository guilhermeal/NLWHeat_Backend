import { Request, Response } from "express";
import { AuthtenticateUserService } from "../services/AuthenticateUserService";

class AuthtenticateUserController {
    async handle(request: Request, response: Response) {
        const service = new AuthtenticateUserService();
        // service.execute("1234");
    }
}

export { AuthtenticateUserController }
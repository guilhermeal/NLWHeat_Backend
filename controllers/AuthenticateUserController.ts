import { Request, Response } from "express";
import { AuthtenticateUserService } from "../services/AuthenticateUserService";

class AuthtenticateUserController {
    async handle(request: Request, response: Response) {

        const { code } = request.body;
        const service = new AuthtenticateUserService();
        const result = await service.execute(code);

        return response.json(result);
    }
}

export { AuthtenticateUserController }
import { Request, Response } from "express";
import { AuthtenticateUserService } from "../services/AuthenticateUserService";

class AuthtenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AuthtenticateUserService();

    try {
      const result = await service.execute(code);
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { AuthtenticateUserController };

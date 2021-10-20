import { Router } from "express";
import { AuthtenticateUserController } from "../controllers/AuthenticateUserController";

const router = Router();

router.post("/authenticate", new AuthtenticateUserController().handle)

export { router }
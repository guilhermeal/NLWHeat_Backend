import { Router } from "express";
import { AuthtenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { Get3LastMessagesController } from "./controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { GetLast3MessagesService } from "./services/GetLast3MessagesService";

const router = Router();

router.post("/authenticate", new AuthtenticateUserController().handle);
router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);
router.get("/messages/last3", new Get3LastMessagesController().handle);




export { router };

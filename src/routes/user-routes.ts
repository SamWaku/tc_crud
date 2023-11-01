import { Router, Request, Response, response } from "express";
import ServiceContainer from "../services/Index";
import Controller from "../controllers/UserController";
const ControllerHandler = Controller(ServiceContainer);

const route: Router = Router();

route.post("/register", (req: Request, res: Response) =>
  ControllerHandler.CreateUser(req, res)
);

export default route;

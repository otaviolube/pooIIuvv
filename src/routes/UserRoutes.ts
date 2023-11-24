import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

UserRouter.get('/users', UserController.listUsers);

export default UserRouter;
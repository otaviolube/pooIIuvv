import { Request, Response } from 'express';
import UserServices from '../services/UserServices';

class UserController {

    constructor(){
    }

    async listUsers(req: Request, res: Response){
        const users = await UserServices.listUsers();

        res.render('users', { users: users })
    }
}

export default new UserController();
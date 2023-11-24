import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserServices {
    constructor(){}

    async listUsers(){
        try{
            const users = await prisma.user.findMany();
            return users;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserServices();
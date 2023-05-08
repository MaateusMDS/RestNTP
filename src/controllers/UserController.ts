import {Request, Response, response} from 'express';
import { prisma } from '../database';

export default {
  async createUser(request: Request, response: Response){
    try {
      const {name, email} = request.body;
      const userExist = await prisma.user.findUnique({where: {email}});

      if (userExist){
        return response.json(
          {
            error: true,
            message: 'Erro: Usuário já existe.'
          }
        );
      }

      const user = await prisma.user.create({
        data: {
          name, email
        }
      });

      return response.json({
        error: false,
        message: 'Sucesso! Usuário criado.',
        user
      });

    } catch (err) {
      return response.json({message: err.message});
    }
  },
  async listAllUsers(request: Request, response: Response){
    try {
      const users = await prisma.user.findMany({});

      return response.json({
        error: false,
        users
      });

    } catch (err) {
      return response.json({message: err.message});
    }
  }
};
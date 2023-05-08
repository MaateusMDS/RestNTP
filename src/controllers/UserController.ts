import {Request, Response} from 'express';
import { prisma } from '../database';

export default {
  async createUser(request: Request, response: Response){
    try {
      const {name, email} = request.body;
      const userExist = await prisma.user;
    } catch (err) {
      return response.json({message: err.message});
    }
  }
};
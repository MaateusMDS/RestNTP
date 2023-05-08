import {Request, Response} from 'express';
import { prisma } from '../database';

export default {
  async createPost(request: Request, response: Response){
    try {
      const {title, content, userId} = request.body;

      const post = await prisma.post.create({
        data: {
          title, content, userId
        }
      });

      return response.json({
        error: false,
        message: 'Sucesso! Post criado.',
        post
      });

    } catch (err) {
      return response.json({message: err.message});
    }
  },
  async listPost(request: Request, response: Response){
    try {
      const {id} = request.params;

      const post = await prisma.post.findUnique({where: {id: Number(id)}});

      if(!post){
        return response.json(
          {
            error: true,
            message: 'Erro. Não foi possível encontrar o post'
          }
        );
      }

      return response.json({
        error: false,
        post
      });

    } catch (err) {
      return response.json({message: err.message});
    }
  },
  async updatePost(request: Request, response: Response){
    try {
      const {id} = request.params;

      const {title, content} = request.body;

      const postExist = await prisma.post.findUnique({where: {id: Number(id)}});

      if(!postExist){
        return response.json(
          {
            error: true,
            message: 'Erro. Não foi possível encontrar o post'
          }
        );
      }

      const post = await prisma.post.update({
        where: {
          id: Number(id)
        },
        data:{
          title, content
        }
      });

      return response.json({
        error: false,
        messager: 'Sucesso! Post foi atualizado.',
        post
      });

    } catch (err) {
      return response.json({message: err.message});
    }
  },
  async deletePost(request: Request, response: Response){
    try {
      const {id} = request.params;

      const postExist = await prisma.post.findUnique({where: {id: Number(id)}});

      if(!postExist){
        return response.json(
          {
            error: true,
            message: 'Erro. Não foi possível encontrar o post'
          }
        );
      }

      const post = await prisma.post.delete({
        where: {
          id: Number(id)
        }});

      return response.json({
        error: false,
        messager: 'Sucesso! Post foi removido',
        post
      });

    } catch (err) {
      return response.json({message: err.message});
    }
  }
};
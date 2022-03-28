import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: 'Alisson', email: 'alisson@eumemo.com'},
]

export default {
 async index(req: Request, res: Response) {
   return res.json(users);
 },

 async create(req: Request, res: Response) {
   const emailService = new EmailService();
   emailService.sendMail({
     to: { name: 'Alisson Henrique', email: 'alisson@eumemo.com' },
     message: { subject: 'Bem vindo ao sistema', body: 'Seja bem vindo' }
   });
 }
};
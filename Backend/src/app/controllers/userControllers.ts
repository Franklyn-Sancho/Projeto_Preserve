import UserContracts from '../../services/contracts/userContracts';
import { Request, Response } from 'express';

export default class UserControllers extends UserContracts {
    public async get(req: Request, res: Response) {
      const [name, email, password] = req.body;
      try {
        const response = await this.getUser(name, email, password);
        
        if(!response) return res.status(404).json({ mesage: "NOT FOUND" });

        return res.status(200).json(response);

      } catch (error) {
        return res.status(500).json(error);
      }  
    }
   
    public async post(req: Request, res: Response) {
      const [name, email, password] = req.body;
      try {
        const response = await this.postUser(name, email, password);
        
        if(!response) return res.status(400).json({ mesage: "USER EXISTIS" });

        return res.status(202).json(response);
        
      } catch (error) {
        return res.status(500).json(error);
      }
    }
}
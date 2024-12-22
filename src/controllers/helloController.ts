import { Request, Response } from 'express';

export const helloController = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Hello from AWS Microservice!' });
};

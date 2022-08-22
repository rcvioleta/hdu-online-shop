import { Request, Response } from 'express';

export const greet = (req: Request, res: Response) => {
  res.send('TestController activated!');
}
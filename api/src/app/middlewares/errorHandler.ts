import {ErrorRequestHandler, NextFunction, Request, Response} from 'express';

export function errorHandler(error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  res.sendStatus(500);
}

import { Application } from 'express';
import { v4 as uuid} from 'uuid';

export const setupMiddleware = (app: Application): void => {
  app.use((req, res, next): void => {
    req.id = uuid();
    next();
  });
};

import { Application } from 'express';
import logger from '../../logger';

export const setupMiddleware = (app: Application): void => {
  app.use((req, res, next): void => {
    req.logger = logger.child({
      path: req.path,
      requestId: req.id,
      requestReceivedAt: new Date()
    });

    next();
  });
};

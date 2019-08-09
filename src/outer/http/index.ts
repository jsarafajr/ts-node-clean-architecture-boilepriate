import express from 'express';
import logger from '../logger';
import { initOrm } from '../database';
import * as loggerMiddleware from './middlewares/loggerMiddleware';
import * as ramlMiddleware from './middlewares/ramlMiddleware';
import * as requestIdMiddleware from './middlewares/requestIdMiddleware';
import * as blogRoutes from './blog_routes';
import * as errorHandlers from './errors';
import * as dependencyInjection from './dependency_injection';

export const startServer = async (port: number): Promise<void> => {
  await initOrm();
  logger.info('DB connection established');

  const app = express();

  requestIdMiddleware.setupMiddleware(app);
  loggerMiddleware.setupMiddleware(app);
  ramlMiddleware.setupMiddleware(app, `${__dirname}/api.raml`);

  dependencyInjection.setup(app);

  app.use(blogRoutes.setupRoutes());

  app.use(errorHandlers.notFoundErrorHandler);
  app.use(errorHandlers.applicationErrorHandler);

  app.listen(port);
  logger.info(`HTTP Server started on port ${port}`);
};

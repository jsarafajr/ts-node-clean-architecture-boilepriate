import { Application, Request } from 'express';
import { ContainerInstance } from 'typedi';
import * as factories from './factories';

const buildContainer = (req: Request): ContainerInstance => {
  const container = new ContainerInstance(req.id);

  Object.values(factories).forEach((factory: Function) => {
    const instance = factory(req);
    container.set(instance.constructor, instance);
  });

  return container;
};

export const setup = (app: Application): void => {
  app.use((req, res, next) => {
    const container = buildContainer(req);
    req.interactor = container.get.bind(container);
    next();
  });
};

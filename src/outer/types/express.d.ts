import { Logger } from '../../domain/logger/Logger';
import { ObjectType } from 'typedi';

declare module 'express-serve-static-core' {
  export interface Request {
    id: string;
    logger: Logger;
    interactor: <T>(type: ObjectType<T>) => T;
  }
}
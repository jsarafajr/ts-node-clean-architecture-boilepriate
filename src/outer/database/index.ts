import 'reflect-metadata';
import { createConnection } from 'typeorm';
import ormconfig from './ormconfig';

export const initOrm = async (): Promise<void> => {
  await createConnection(ormconfig);
};

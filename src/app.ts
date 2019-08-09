import 'reflect-metadata';
import config from './config';
import { startServer } from './outer/http';

startServer(config.get('port'))
  .catch(error => console.error(error));
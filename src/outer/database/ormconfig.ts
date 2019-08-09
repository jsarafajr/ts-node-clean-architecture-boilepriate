import { ConnectionOptions } from 'typeorm';
import config from '../../config';

const db = config.get('db');

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: db.host,
  port: db.port,
  username: db.username,
  password: db.password,
  database: db.database,
  entities: [
    `${__dirname}/entities/*.ts`,
    `${__dirname}/entities/*.js`
  ],
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations'
  }
};

export = connectionOptions;

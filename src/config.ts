import convict from 'convict';
import dotenv from 'dotenv';
import packageJson from '../package.json';

dotenv.config();

const config = convict({
  environment: {
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    format: Number,
    default: 8080,
    env: 'PORT'
  },
  db: {
    host: {
      format: String,
      default: 'localhost',
      env: 'DB_HOST'
    },
    port: {
      format: Number,
      default: 5432,
      env: 'DB_PORT'
    },
    username: {
      format: String,
      default: 'postgres',
      env: 'DB_USERNAME'
    },
    password: {
      format: String,
      default: '',
      env: 'DB_PASSWORD'
    },
    database: {
      format: String,
      default: packageJson.name,
      env: 'DB_DATABASE'
    }
  },
  logger: {
    level: {
      format: ['error', 'warn', 'info', 'debug', 'trace', 'silent'],
      default: 'info',
      env: 'LOG_LEVEL'
    },
    pretty: {
      format: Boolean,
      default: false,
      env: 'LOG_PRETTY'
    }
  }
});

config.validate({ allowed: 'strict' });

export default config;

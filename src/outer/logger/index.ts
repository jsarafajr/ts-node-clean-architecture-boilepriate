import config from '../../config';
import { PinoLogger } from './PinoLogger';
import { Logger } from '../../domain/logger/Logger';

const { level, pretty } = config.get('logger');

const logger: Logger = new PinoLogger(level, pretty);

export default logger;

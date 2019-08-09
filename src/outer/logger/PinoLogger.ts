import Pino from 'pino';
import { LogArg, Logger } from '../../domain/logger/Logger';

export class PinoLogger implements Logger {
  private pino: Pino.Logger;

  public constructor(level: string, prettyPrint: boolean) {
    this.pino = Pino({
      level,
      prettyPrint
    });
  }

  public child(options: object): Logger {
    return this.pino.child(options);
  }

  public trace(msg: LogArg, ...args: LogArg[]): void {
    this.pino.debug(msg, ...args);
  }

  public debug(msg: LogArg, ...args: LogArg[]): void {
    this.pino.debug(msg, ...args);
  }

  public info(msg: LogArg, ...args: LogArg[]): void {
    this.pino.info(msg, ...args);
  }

  public warn(msg: LogArg, ...args: LogArg[]): void {
    this.pino.warn(msg, ...args);
  }

  public error(msg: LogArg, ...args: LogArg[]): void {
    this.pino.error(msg, ...args);
  }
}

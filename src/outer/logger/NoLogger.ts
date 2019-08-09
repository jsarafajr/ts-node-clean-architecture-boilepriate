import { Logger } from '../../domain/logger/Logger';

const noOp = (): void => {
  // no-op
};

export class NoLogger implements Logger {
  public trace = noOp;

  public debug = noOp;

  public info = noOp;

  public warn = noOp;

  public error = noOp;

  public child(options: object): Logger {
    return new NoLogger();
  }
}
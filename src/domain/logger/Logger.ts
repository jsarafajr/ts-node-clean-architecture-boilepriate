// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LogArg = any;

export interface Logger {
  child(options: object): Logger;
  trace(msg: LogArg, ...args: LogArg[]): void;
  debug(msg: LogArg, ...args: LogArg[]): void;
  info(msg: LogArg, ...args: LogArg[]): void;
  warn(msg: LogArg, ...args: LogArg[]): void;
  error(msg: LogArg, ...args: LogArg[]): void;
}
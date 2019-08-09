declare module 'osprey' {

  type RamlMiddleware = (req: unknown, res: unknown, next: unknown) => unknown

  type Options = {
  }

  type ServerOptions = {
    cors?: boolean;
    notFoundHandler?: boolean;
  };

  export function loadFile(path: string, opts?: Options): Promise<RamlMiddleware>

  export function server(raml: unknown, opts?: ServerOptions): RamlMiddleware;
}
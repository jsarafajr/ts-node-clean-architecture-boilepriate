import { Application } from 'express';
import osprey from 'osprey';
import { loadRAMLSync, hl } from 'raml-1-parser';

type BasicNodeWithExpand = hl.BasicNode & {
  expand(expandLibraries: boolean): BasicNodeWithExpand;
}

export const setupMiddleware = (app: Application, ramlFilePath: string): void => {
  const raml = loadRAMLSync(ramlFilePath, [], { rejectOnErrors: true }) as BasicNodeWithExpand;
  const ramlJSON = raml.expand(true).toJSON({
    serializeMetadata: false
  });

  const middleware = osprey.server({ ...ramlJSON, RAMLVersion: raml.RAMLVersion() }, {
    cors: false
  });

  app.use('/api', middleware);
};

import { ErrorRequestHandler, RequestHandler } from 'express';
import { ApplicationError, ServerError, UnauthorizedError, ValidationError } from './errorTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertToApplicationError = (error: any): ApplicationError => {
  if (error.ramlValidation) {
    error.requestErrors = error.requestErrors || [];

    if (error.requestErrors.length && error.requestErrors[0].dataPath === 'authorization') {
      // RAML failed to validate authorization header since it's empty
      return new UnauthorizedError();
    }

    return new ValidationError(error.requestErrors);
  }

  if (!(error instanceof ApplicationError)) {
    return new ServerError();
  }

  return error;
};

export const applicationErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const applicationError = convertToApplicationError(error);

  if (applicationError instanceof ServerError) {
    req.logger.error(error);
  } else {
    req.logger.trace(error);
  }

  applicationError.sendResponse(req, res);
};

export const notFoundErrorHandler: RequestHandler = (req, res) => {
  res.sendStatus(404);
};
import { RequestHandler } from 'express';

export const asyncHandler = (requestHandler: RequestHandler): RequestHandler => {
  return async (req, res, next): Promise<void> => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

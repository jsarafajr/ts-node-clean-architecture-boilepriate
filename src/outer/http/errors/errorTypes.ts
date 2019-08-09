import { Request, Response } from 'express';

export class ApplicationError extends Error {
  public constructor(
    public status: number = 400,
    public code = 'UNKNOWN',
    public message: string = '',
    public details?: unknown[]
  ) {
    super();
    Object.setPrototypeOf(this, new.target.prototype);
  }

  public sendResponse(req: Request, res: Response): void {
    res.status(this.status).send({
      error: {
        code: this.code,
        message: this.message,
        details: this.details
      }
    });
  }
}

export class ApiError extends ApplicationError {
  public constructor(status: number, message: string) {
    super(status, 'API_ERROR', message);
  }
}

export class UnauthorizedError extends ApplicationError {
  public constructor() {
    super(401, 'UNAUTHORIZED', 'Resource requires authorization');
  }
}

export class ResourceNotFoundError extends ApplicationError {
  public constructor(message?: string) {
    super(404, 'RESOURCE_NOT_FOUND', message);
  }
}

type ValidationErrorDetails = {
  dataPath: string;
  message: string;
};

export class ValidationError extends ApplicationError {
  public constructor(public validationDetails: ValidationErrorDetails[] = []) {
    super(422, 'VALIDATION_ERROR', 'Invalid request payload');
    this.details = this.validationDetails.map(detail => `${detail.dataPath} ${detail.message}`);
  }
}

export class ServerError extends ApplicationError {
  public constructor() {
    super(500, 'SERVER_ERROR', 'Something went wrong');
  }
}

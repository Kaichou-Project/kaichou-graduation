import { Response } from 'express'
import { Error, Error as MongooseError } from 'mongoose'
import { findAttributeMessage } from '@util/helper'

type ErrorsResponse = Array<string | Error> | any
type GeneralError =
  // Unprocessable Entity
  | SyntaxError
  | MongooseError.CastError

  // Bad Request
  | TypeError
  | MongooseError.ValidationError
  | MongooseError.ValidatorError

  // Not Found
  | ReferenceError
  | MongooseError.DocumentNotFoundError

  // Unauthorize
  | RangeError

  // Internal Server Error
  | Error

/**
 * Base of response handler
 * Note: `should not be used in controller`
 * @param res     - response object passed by express
 * @param status  - status code of a response
 * @param content - the response data
 * @param message - description of a response
 * @param errors  - list of errors if any
 * @returns response
 */
export const responseHandler = (
  res: Response,
  status: number,
  content: any = null,
  message = '',
  error: ErrorsResponse = []
) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Accept', 'application/json')
  return res.status(status).json({
    content,
    message: `${message}. ${findAttributeMessage(error)}`,
  })
}

/**
 * Bad Request :
 * The server could not understand the request due to invalid syntax
 * @param res response object
 * @param message description
 * @param errors list of errors
 */
export const responseBadRequest = (
  res: Response,
  message = 'Bad Request',
  errors: ErrorsResponse = []
) => responseHandler(res, 400, undefined, message, errors)

/**
 * Unauthorized :
 * The client must authenticate itself to get the requested response
 * @param res response object
 * @param message description
 * @param errors list of errors
 */
export const responseUnauthorized = (
  res: Response,
  message = 'Unauthorized',
  errors: ErrorsResponse = []
) => responseHandler(res, 401, undefined, message, errors)

/**
 * Forbidden :
 * The client does not have access rights to the content
 * @param res response object
 * @param message description
 * @param errors list of errors
 */
export const responseForbidden = (
  res: Response,
  message = 'Forbidden',
  errors: ErrorsResponse = []
) => responseHandler(res, 403, undefined, message, errors)

/**
 * Not Found
 * The server can not find the requested resource
 * @param res response object
 * @param message description
 * @param errors list of errors
 */
export const responseNotFound = (
  res: Response,
  message = 'Not Found',
  errors: ErrorsResponse = []
) => responseHandler(res, 404, undefined, message, errors)

/**
 * Conflict
 * This response is sent when a request conflicts with the current state of the server
 * @param res response object
 * @param message description
 * @param errors list of errors
 */
export const responseConflict = (
  res: Response,
  message = 'Conflict',
  errors: ErrorsResponse = []
) => responseHandler(res, 409, undefined, message, errors)

/**
 * Unprocessable Entity
 * The request was well-formed but was unable to be followed due to semantic errors
 * @param res response object
 * @param message description
 * @param errors list of errors
 */
export const responseUnprocessableEntity = (
  res: Response,
  message = 'Unprocessable Entity',
  errors: ErrorsResponse = []
) => responseHandler(res, 422, undefined, message, errors)

/**
 * Internal Server Error
 * The server encountered an unexpected condition that prevented it from fulfilling the request
 * @param res response object
 * @param message description
 * @param errors list of errors
 */
export const responseInternalServerError = (
  res: Response,
  message = 'Internal Server Error',
  errors: ErrorsResponse = []
) => responseHandler(res, 500, undefined, message, errors)

/**
 * Ok
 * The request has succeeded
 * @param res response object
 * @param content response data
 * @param message description
 */
export const responseSuccess = (
  res: Response,
  content: any = null,
  message = 'Success'
) => responseHandler(res, 200, content, message, undefined)

/**
 * Created
 * The request has succeeded and a new resource has been created as a result
 * @param res response object
 * @param content response data
 * @param message description
 */
export const responseCreated = (
  res: Response,
  content: any = null,
  message = 'Created'
) => responseHandler(res, 201, content, message, undefined)

/**
 * General response error resolver
 * @param res express response
 * @param err error given from catch
 * @param msg custom message of error
 */
export const responseError = (
  res: Response,
  err: GeneralError,
  msg: string | undefined = undefined
) => {
  switch (true) {
    // Unprocessable Entity
    case err instanceof SyntaxError:
    case err instanceof MongooseError.CastError:
      return responseUnprocessableEntity(res, msg, err)

    // Bad Request
    case err instanceof TypeError:
    case err instanceof MongooseError.ValidationError:
    case err instanceof MongooseError.ValidatorError:
      return responseBadRequest(res, msg, err)

    // Not Found
    case err instanceof ReferenceError:
    case err instanceof MongooseError.DocumentNotFoundError:
      return responseNotFound(res, msg, err)

    // Unauthorized
    case err instanceof RangeError:
      return responseUnauthorized(res, msg, err)

    // Internal Server Error
    default:
      return responseInternalServerError(res, msg, err)
  }
}

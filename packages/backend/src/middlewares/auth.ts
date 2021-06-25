import { HEADER_TOKEN } from '@constant/request'
import { responseError } from '@util/response'
import { isUndefined } from '@util/validate'
import { NextFunction, Request, Response } from 'express'

/**
 * Middleware for auth
 * @param req express request
 * @param res express response
 * @param next exporess next
 */
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.get(HEADER_TOKEN) as string
  try {
    if (isUndefined(token) || token === null)
      throw TypeError('no auth token provided')
    if (token !== process.env.AUTH_TOKEN)
      throw new TypeError('auth token mismatch')

    // if auth token match
    next()
  } catch (err) {
    responseError(res, err, 'you are unauthorized')
  }
}

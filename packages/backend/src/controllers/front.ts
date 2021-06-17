import { Request, Response } from 'express'
import Logger from '@logger'
import { responseSuccess } from '@util/response'

export const indexController = (req: Request, res: Response) => {
  Logger.info('Enter index route')
  return responseSuccess(res, null, 'Welcome to Kaichou Project API')
}

import { Request, Response } from 'express'
import Logger from '@logger'
import { responseSuccess } from '@util/response'

export const indexController = (req: Request, res: Response) => {
  Logger.info('Enter index route')

  const data = {
    status: 'online',
    time: new Date(),
  }
  return responseSuccess(res, data, 'Welcome to the Kaichou Project API')
}

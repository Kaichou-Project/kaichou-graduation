import { Request, Response } from 'express'
import Logger from '../logger'

export const indexController = (req: Request, res: Response) => {
  Logger.info('Enter index route')
  res.send('Welcome to Kaichou Project API')
}

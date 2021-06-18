import { MessageDoc } from '@model/message'
import { getAllMessage, storeMessage } from '@service/message'
import {
  responseBadRequest,
  responseCreated,
  responseInternalServerError,
  responseSuccess,
} from '@util/response'
import { Request, Response } from 'express'

export const getAllMessageController = async (_: Request, res: Response) => {
  try {
    const messages: MessageDoc[] = await getAllMessage()

    return responseSuccess(res, messages)
  } catch (error) {
    return responseInternalServerError(res, error.message, error)
  }
}

export const createMessageController = async (req: Request, res: Response) => {
  try {
    //   Request body validation
    const { creator, content } = req.body
    if (!(creator && content)) {
      throw new TypeError('creator and content is required')
    }

    const message: MessageDoc = await storeMessage(creator, content)

    return responseCreated(res, message)
  } catch (error) {
    if (error instanceof TypeError) {
      return responseBadRequest(res, error.message)
    }

    return responseInternalServerError(res, error.message, error)
  }
}

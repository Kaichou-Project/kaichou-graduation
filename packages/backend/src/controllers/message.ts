import { MessageDoc, MessageQuery } from '@model/message'
import { getAllMessages, storeMessage } from '@service/message'
import {
  responseBadRequest,
  responseCreated,
  responseInternalServerError,
  responseSuccess,
} from '@util/response'
import { Request, Response } from 'express'

export const getAllMessagesController = async (req: Request, res: Response) => {
  try {
    //  Gets [limit] messages after _id [lastId]
    const { lastId = 'NULL', limit = '10' }: MessageQuery = req.query
    const messages: MessageDoc[] = await getAllMessages(lastId, +limit)

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

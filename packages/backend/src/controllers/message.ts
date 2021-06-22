import { MessageDoc, MessageQuery } from '@model/message'
import {
  getAllMessages,
  storeMessage,
  updateMessage,
  deleteMessage,
} from '@service/message'
import {
  responseBadRequest,
  responseCreated,
  responseInternalServerError,
  responseSuccess,
} from '@util/response'
import { verifyCaptchaToken } from '@util/captcha'
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
    const { creator, content, captchaToken } = req.body

    if (!(await verifyCaptchaToken(captchaToken))) {
      throw new TypeError('Invalid captcha token')
    }

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

export const updateMessageController = async (req: Request, res: Response) => {
  try {
    //   Request body validation
    const { _id, creator, content, isVerified } = req.body
    if (!(_id && creator && content)) {
      throw new TypeError('id, creator and content is required')
    }

    const message: MessageDoc = await updateMessage(
      _id,
      creator,
      content,
      isVerified || false
    )

    return responseSuccess(res, message)
  } catch (error) {
    if (error instanceof TypeError)
      return responseBadRequest(res, error.message)

    return responseInternalServerError(res, error.message, error)
  }
}

export const deleteMessageController = async (req: Request, res: Response) => {
  try {
    //   Request body validation
    const { _id } = req.body
    if (!_id) throw new TypeError('id required')

    const success = await deleteMessage(_id)

    if (!success) throw new TypeError('Message not found')
    else return responseSuccess(res)
  } catch (error) {
    if (error instanceof TypeError) {
      return responseBadRequest(res, error.message)
    }

    return responseInternalServerError(res, error.message, error)
  }
}

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
import { Request, Response } from 'express'
import Logger from '@logger'

export const getAllMessagesController = async (req: Request, res: Response) => {
  try {
    //  Gets [limit] messages after _id [lastId]
    const {
      lastId = 'NULL',
      limit = '10',
      getVerified = 'false',
    }: MessageQuery = req.query
    Logger.debug(req.query)
    const messages: MessageDoc[] = await getAllMessages(
      lastId,
      +limit,
      // if getVerified is anything other than 'false', it becomes true
      getVerified.toLowerCase() !== 'false'
    )

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

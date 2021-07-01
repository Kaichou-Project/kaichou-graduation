import { MessageDoc } from '@model/message'
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
import { isBoolean, isString, isUndefined, isValidId } from '@util/validate'
import { Request, Response } from 'express'
import { PaginateQuery } from 'interface/request'

export const getAllMessagesController = async (req: Request, res: Response) => {
  try {
    //  Gets [limit] messages after _id [lastId]
    const { lastId = 'NULL', limit = '10' }: PaginateQuery = req.query
    const messages: MessageDoc[] = await getAllMessages(lastId, +limit, true)

    return responseSuccess(res, messages)
  } catch (error) {
    return responseInternalServerError(res, error.message, error)
  }
}

export const createMessageController = async (req: Request, res: Response) => {
  try {
    // Request body validation
    const { creator, content } = req.body

    if (!(creator && content))
      throw new TypeError('creator and content is required')
    if (!isString(creator)) throw new TypeError('creator must be a string')
    if (!isString(content)) throw new TypeError('content must be a string')

    // Discard records bigger than 1MB (You could literally write a novel to her with that limit)
    if (creator.length + content.length > 1048576) {
      throw new TypeError('your message is too long')
    }

    await storeMessage({ creator, content })

    return responseCreated(res, req.body)
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
    if (!(_id && creator && content && !isUndefined(isVerified))) {
      throw new TypeError('_id, creator, content and isVerified is required')
    }
    if (!isString(_id)) throw new TypeError('_id must be a string')
    if (!isString(creator)) throw new TypeError('creator must be a string')
    if (!isString(content)) throw new TypeError('content must be a string')
    if (!isBoolean(isVerified))
      throw new TypeError('isVerified must be a boolean')

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
    if (!isValidId(_id)) throw new TypeError('_id invalid')

    await deleteMessage(_id)

    return responseSuccess(res)
  } catch (error) {
    if (error instanceof TypeError) {
      return responseBadRequest(res, error.message)
    }

    return responseInternalServerError(res, error.message, error)
  }
}

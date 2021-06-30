import { FanartDoc } from '@model/fanart'
import {
  deleteFanart,
  getAllFanart,
  storeFanart,
  updateFanart,
} from '@service/fanart'
import {
  responseBadRequest,
  responseCreated,
  responseInternalServerError,
  responseSuccess,
} from '@util/response'
import { isBoolean, isString, isUndefined, isValidId } from '@util/validate'
import { Request, Response } from 'express'
import { PaginateQuery } from 'interface/request'

export const getAllFanartController = async (req: Request, res: Response) => {
  try {
    //  Gets [limit] fanart after _id [lastId]
    const { lastId = 'NULL', limit = '10' }: PaginateQuery = req.query
    const fanarts: FanartDoc[] = await getAllFanart(lastId, +limit, true)

    return responseSuccess(res, fanarts)
  } catch (error) {
    return responseInternalServerError(res, error.message, error)
  }
}

export const createFanartController = async (req: Request, res: Response) => {
  try {
    // Request body validation
    const { creator, imageUrl } = req.body

    if (!(creator && imageUrl))
      throw new TypeError('creator and imageUrl is required')
    if (!isString(creator)) throw new TypeError('creator must be a string')
    if (!isString(imageUrl)) throw new TypeError('imageUrl must be a string')

    // Discard records bigger than 4KB (longest possible URL + 2KB for creator)
    if (creator.length + imageUrl.length > 4096) {
      throw new TypeError('your url or name is too long')
    }

    await storeFanart({ creator, imageUrl })

    return responseCreated(res, req.body)
  } catch (error) {
    if (error instanceof TypeError) {
      return responseBadRequest(res, error.message)
    }

    return responseInternalServerError(res, error.message, error)
  }
}

export const updateFanartController = async (req: Request, res: Response) => {
  try {
    // Request body validation
    const { _id, creator, imageUrl, isVerified } = req.body
    if (!(_id && creator && imageUrl && !isUndefined(isVerified))) {
      throw new TypeError('_id, creator, imageUrl, and isVerified is required')
    }
    if (!isString(_id)) throw new TypeError('_id must be a string')
    if (!isString(creator)) throw new TypeError('creator must be a string')
    if (!isString(imageUrl)) throw new TypeError('imageUrl must be a string')
    if (!isBoolean(isVerified))
      throw new TypeError('isVerified must be a boolean')

    // Check _id validity
    if (!isValidId(_id)) throw new TypeError('_id invalid')

    const fanart: FanartDoc = await updateFanart(
      _id,
      creator,
      imageUrl,
      isVerified || false
    )

    return responseSuccess(res, fanart)
  } catch (error) {
    if (error instanceof TypeError)
      return responseBadRequest(res, error.message)

    return responseInternalServerError(res, error.message, error)
  }
}

export const deleteFanartController = async (req: Request, res: Response) => {
  try {
    // Request body validation
    const { _id } = req.body
    if (!_id) throw new TypeError('_id required')
    if (!isValidId(_id)) throw new TypeError('_id invalid')

    await deleteFanart(_id)

    return responseSuccess(res)
  } catch (error) {
    if (error instanceof TypeError) {
      return responseBadRequest(res, error.message)
    }

    return responseInternalServerError(res, error.message, error)
  }
}

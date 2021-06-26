import { VideoDoc } from '@model/video'
import {
  deleteVideo,
  getAllVideos,
  storeVideo,
  updateVideo,
} from '@service/video'
import {
  responseBadRequest,
  responseCreated,
  responseInternalServerError,
  responseSuccess,
} from '@util/response'
import { verifyCaptchaToken } from '@util/captcha'
import {
  isBoolean,
  isString,
  isUndefined,
  isValidEmbedUrl,
  isValidId,
} from '@util/validate'
import { Request, Response } from 'express'
import { PaginateQuery } from 'interface/request'

export const getAllVideoController = async (req: Request, res: Response) => {
  try {
    //  Gets [limit] videos after _id [lastId]
    const { lastId = 'NULL', limit = '10' }: PaginateQuery = req.query
    const messages: VideoDoc[] = await getAllVideos(lastId, +limit)

    return responseSuccess(res, messages)
  } catch (error) {
    return responseInternalServerError(res, error.message, error)
  }
}

export const createVideoController = async (req: Request, res: Response) => {
  try {
    //   Request body validation
    const { creator, videoEmbedUrl, captchaToken } = req.body

    if (!(await verifyCaptchaToken(captchaToken))) {
      throw new TypeError('Invalid captcha token')
    }

    if (!(creator && videoEmbedUrl))
      throw new TypeError('creator and videoEmbedUrl is required')
    if (!isString(creator)) throw new TypeError('creator must be a string')
    if (!isString(videoEmbedUrl))
      throw new TypeError('videoEmbedUrl must be a string')
    if (!isValidEmbedUrl(videoEmbedUrl))
      throw new TypeError('videoEmbedUrl invalid')

    const video: VideoDoc = await storeVideo(creator, videoEmbedUrl)

    return responseCreated(res, video)
  } catch (error) {
    if (error instanceof TypeError) {
      return responseBadRequest(res, error.message)
    }

    return responseInternalServerError(res, error.message, error)
  }
}

export const updateVideoController = async (req: Request, res: Response) => {
  try {
    //   Request body validation
    const { _id, creator, videoEmbedUrl, isVerified } = req.body
    if (!(_id && creator && videoEmbedUrl && !isUndefined(isVerified))) {
      throw new TypeError(
        '_id, creator, videoEmbedUrl and isVerified is required'
      )
    }
    if (!isString(_id)) throw new TypeError('_id must be a string')
    if (!isString(creator)) throw new TypeError('creator must be a string')
    if (!isString(videoEmbedUrl))
      throw new TypeError('videoEmbedUrl must be a string')
    if (!isBoolean(isVerified))
      throw new TypeError('isVerified must be a boolean')
    if (!isValidEmbedUrl(videoEmbedUrl))
      throw new TypeError('videoEmbedUrl invalid')

    const video: VideoDoc = await updateVideo(
      _id,
      creator,
      videoEmbedUrl,
      isVerified || false
    )

    return responseSuccess(res, video)
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(error.message)
      return responseBadRequest(res, error.message)
    }

    return responseInternalServerError(res, error.message, error)
  }
}

export const deleteVideoController = async (req: Request, res: Response) => {
  try {
    //   Request body validation
    const { _id } = req.body
    if (!_id) throw new TypeError('id required')
    if (!isValidId(_id)) throw new TypeError('_id invalid')

    await deleteVideo(_id)

    return responseSuccess(res)
  } catch (error) {
    if (error instanceof TypeError) {
      return responseBadRequest(res, error.message)
    }

    return responseInternalServerError(res, error.message, error)
  }
}
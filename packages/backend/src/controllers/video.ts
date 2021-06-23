import { VideoDoc, VideoQuery } from '@model/video'
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
import { Request, Response } from 'express'

export const getAllVideoController = async (req: Request, res: Response) => {
  try {
    //  Gets [limit] videos after _id [lastId]
    const { lastId = 'NULL', limit = '10' }: VideoQuery = req.query
    const messages: VideoDoc[] = await getAllVideos(lastId, +limit)

    return responseSuccess(res, messages)
  } catch (error) {
    return responseInternalServerError(res, error.message, error)
  }
}

export const createVideoController = async (req: Request, res: Response) => {
  try {
    //   Request body validation
    const { creator, videoEmbedUrl } = req.body
    if (!(creator && videoEmbedUrl)) {
      throw new TypeError('creator and videoEmbedUrl is required')
    }

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
    if (!(_id && creator && videoEmbedUrl)) {
      throw new TypeError('id, creator and videoEmbedUrl is required')
    }

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

    const success = await deleteVideo(_id)

    if (!success) throw new TypeError('Video not found')
    else return responseSuccess(res)
  } catch (error) {
    if (error instanceof TypeError) {
      return responseBadRequest(res, error.message)
    }

    return responseInternalServerError(res, error.message, error)
  }
}

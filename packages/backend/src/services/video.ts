import { VideoModel, VideoDoc, VideoInterface } from '@model/video'
import { Request, Response } from 'express'

/**
 * Get all videos
 * @returns array of video document
 */
export const getAllVideos = async (
  lastId: string,
  limit: number
): Promise<VideoDoc[]> => {
  if (lastId === 'NULL') {
    return await VideoModel.find().limit(limit)
  }
  return await VideoModel.find({ _id: { $gt: lastId } }).limit(limit)
}

/**
 * Create new video
 * @param creator video's creator
 * @param videoEmbedUrl video's videoEmbedUrl
 * @returns new video document
 */
export const storeVideo = async (
  creator: string,
  videoEmbedUrl: string
): Promise<VideoDoc> => {
  const data: VideoInterface = {
    creator,
    videoEmbedUrl,
    isVerified: false,
  }

  // Create new video
  const video = new VideoModel(data)
  await video.save()

  return video
}

/**
 * Update existing video
 * @param _id video's id
 * @param creator video's creator
 * @param videoEmbedUrl video's videoEmbedUrl
 * @param isVerified video's isVerified
 * @returns new video document
 */
export const updateVideo = async (
  _id: string,
  creator: string,
  videoEmbedUrl: string,
  isVerified: boolean
): Promise<VideoDoc> => {
  const conditions = { _id }

  const data: VideoInterface = {
    creator,
    videoEmbedUrl,
    isVerified,
  }

  const options = {
    new: true,
  }

  const video = await VideoModel.findOneAndUpdate(conditions, data, options)

  if (!video) throw new TypeError('Video not found')
  return video
}

/**
 * Delete existing video
 * @param id video's id
 * @returns true if video is found and deleted successfully
 */
export const deleteVideo = async (_id: string): Promise<boolean> => {
  const res = await VideoModel.deleteOne({ _id })
  return res.deletedCount !== 0
}

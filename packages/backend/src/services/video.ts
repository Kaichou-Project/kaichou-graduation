import { VideoModel, VideoDoc, VideoInterface } from '@model/video'

/**
 * Get all videos
 * @returns array of video document
 */
export const getAllVideos = async (
  lastId: string,
  limit: number,
): Promise<VideoDoc[]> => {
  if (lastId === 'NULL') {
    return VideoModel.find({ isVerified: true }).limit(limit).exec()
  }
  return VideoModel.find({ _id: { $gt: lastId } })
    .limit(limit)
    .exec()
}

/**
 * Create new video
 * @param creator video's creator
 * @param videoEmbedUrl video's videoEmbedUrl
 * @returns new video document
 */
export const storeVideo = async (
  creator: string,
  videoEmbedUrl: string,
): Promise<VideoDoc> => {
  const data: VideoInterface = {
    creator,
    videoEmbedUrl,
    isVerified: true,
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
  isVerified: boolean,
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

  const video = await VideoModel.findOneAndUpdate(
    conditions,
    data,
    options,
    (err, res) => {
      console.log(err)
      // throw responseError(res, err, err.message)
    },
  )
  if (!video) throw TypeError(`Video with id ${_id} not found`)
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

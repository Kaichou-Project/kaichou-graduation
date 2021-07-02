import { VideoModel, VideoDoc, VideoInterface } from '@model/video'

/**
 * Get all videos
 * @param lastId ID of last video document (pagination)
 * @param limit num of video in one page (pagination)
 * @param isVerified set to true to fetch verified video and vice versa
 * @returns array of video document
 */
export const getAllVideos = async (
  lastId: string,
  limit: number,
  isVerified: boolean
): Promise<VideoDoc[]> => {
  if (lastId === 'NULL' || lastId === '') {
    return VideoModel.find({ isVerified })
      .select('-__v -updatedAt')
      .limit(limit)
      .exec()
  }
  return VideoModel.find({ _id: { $gt: lastId }, isVerified })
    .select('-__v -updatedAt')
    .limit(limit)
    .exec()
}

/**
 * Create new video
 * @param creator video's creator
 * @param title video's title
 * @param videoEmbedUrl video's videoEmbedUrl
 * @returns new video document
 */
export const storeVideo = async (
  creator: string,
  title: string,
  videoEmbedUrl: string
): Promise<VideoDoc> => {
  const data: VideoInterface = {
    creator,
    title,
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
 * @param title video's title
 * @param videoEmbedUrl video's videoEmbedUrl
 * @param isVerified video's isVerified
 * @returns new video document
 */
export const updateVideo = async (
  _id: string,
  creator: string,
  title: string,
  videoEmbedUrl: string,
  isVerified: boolean
): Promise<VideoDoc> => {
  const conditions = { _id }

  const data: VideoInterface = {
    creator,
    title,
    videoEmbedUrl,
    isVerified,
  }

  const options = {
    new: true,
  }

  const video = await VideoModel.findOneAndUpdate(conditions, data, options)

  if (!video) throw TypeError(`Video with id ${_id} not found`)
  return video
}

/**
 * Delete existing video
 * @param id video's id
 * @returns true if video is found and deleted successfully
 */
export const deleteVideo = async (_id: string): Promise<void> => {
  const result = await VideoModel.deleteOne({ _id })
  if (result.deletedCount === 0) throw new TypeError('video not found')
}

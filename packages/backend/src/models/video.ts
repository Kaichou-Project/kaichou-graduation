import { Document, model, Model } from 'mongoose'
import { MODEL_VIDEO } from '@constant/general'
import { VideoSchema } from '@model/schemas/video'

export interface VideoInterface {
  creator: string
  title: string
  videoEmbedUrl: string
  isVerified: boolean
}

export interface VideoDoc extends Document, VideoInterface {}

export const VideoModel: Model<VideoDoc> = model(MODEL_VIDEO, VideoSchema)

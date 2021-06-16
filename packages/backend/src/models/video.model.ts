import { Document, model, Model } from 'mongoose'
import { MODEL_VIDEO } from '../constant/general.constant'
import { VideoSchema } from './schemas/video.schemas'

export interface VideoInterface {
  creator: string
  videoEmbedUrl: string
}

export interface VideoDoc extends Document, VideoInterface {}

export const VideoModel: Model<VideoDoc> = model(MODEL_VIDEO, VideoSchema)

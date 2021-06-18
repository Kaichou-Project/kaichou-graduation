import { Schema } from 'mongoose'

export const VideoSchema: Schema = new Schema(
  {
    creator: {
      type: String,
      required: true,
    },
    videoEmbedUrl: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

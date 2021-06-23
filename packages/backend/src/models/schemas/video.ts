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
      index: true,
    },
  },
  {
    timestamps: true,
  }
)

VideoSchema.index({ isVerified: 1 })

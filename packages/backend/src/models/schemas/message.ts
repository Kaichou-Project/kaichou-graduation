import { Schema } from 'mongoose'

export const MessageSchema: Schema = new Schema(
  {
    creator: {
      type: String,
      required: true,
    },
    content: {
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

MessageSchema.index({ isVerified: 1 })

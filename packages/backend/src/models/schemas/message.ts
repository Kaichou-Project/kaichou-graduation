import { Schema } from 'mongoose'

export const MessageSchema: Schema = new Schema(
  {
    creator: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      default: '',
    },
    content: {
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

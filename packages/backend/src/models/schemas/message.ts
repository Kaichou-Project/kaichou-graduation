import { Schema } from 'mongoose'

export const MessageSchema: Schema = new Schema(
  {
    creator: {
      type: String,
      required: true,
    },
    contentOrigin: {
      type: String,
      required: true,
    },
    contentJp: {
      type: String,
      default: '',
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

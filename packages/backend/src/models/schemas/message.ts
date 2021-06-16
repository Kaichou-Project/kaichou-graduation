import { Schema } from 'mongoose'

export const MessageSchema: Schema = new Schema(
  {
    author: {
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
  },
  {
    timestamps: true,
  }
)

import { Schema } from 'mongoose'

const MessageItemSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
    default: 'en',
  },
})

export const MessageSchema: Schema = new Schema(
  {
    creator: {
      type: String,
      required: true,
    },
    messages: {
      type: [MessageItemSchema],
      required: true,
      default: [],
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

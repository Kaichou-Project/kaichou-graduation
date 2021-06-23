import { Schema } from 'mongoose'

export const FanartSchema: Schema = new Schema(
  {
    creator: {
      type: String,
      required: true,
    },
    imageUrl: {
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

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
  },
  {
    timestamps: true,
  }
)

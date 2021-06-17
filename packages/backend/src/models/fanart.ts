import { Document, model, Model } from 'mongoose'
import { MODEL_FANART } from '@constant/general'
import { FanartSchema } from '@model/schemas/fanart'

export interface FanartInterface {
  creator: string
  imageUrl: string
}

export interface FanartDoc extends Document, FanartInterface {}

export const FanartModel: Model<FanartDoc> = model(MODEL_FANART, FanartSchema)

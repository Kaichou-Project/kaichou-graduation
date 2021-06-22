import { Document, model, Model } from 'mongoose'
import { MODEL_MESSAGE } from '@constant/general'
import { MessageSchema } from '@model/schemas/message'

export interface MessageInterface {
  creator: string
  contentOrigin: string
  contentJp: string
  isVerified: boolean
}

export interface MessageDoc extends Document, MessageInterface {}

export const MessageModel: Model<MessageDoc> = model(
  MODEL_MESSAGE,
  MessageSchema
)

import { Document, model, Model } from 'mongoose'
import { MODEL_MESSAGE } from '../constant/general.constant'
import { MessageSchema } from './schemas/message.schemas'

export interface MessageInterface {
  author: string
  avatarUrl: string
  content: string
}

export interface MessageDoc extends Document, MessageInterface {}

export const MessageModel: Model<MessageDoc> = model(
  MODEL_MESSAGE,
  MessageSchema
)

import { MessageDoc, MessageInterface, MessageModel } from '@model/message'
import {
  StoreMessageParameter,
  UpdateMessageParameter,
} from 'interface/service'

/**
 * Get all messages
 * @returns array of message document
 */
export const getAllMessages = async (
  lastId: string,
  limit: number
): Promise<MessageDoc[]> => {
  if (lastId === 'NULL') {
    return MessageModel.find().limit(limit).exec()
  }
  return MessageModel.find({ _id: { $gt: lastId } })
    .limit(limit)
    .exec()
}

/**
 * Create new message
 * @param creator message's creator
 * @param content message's content
 * @returns new message document
 */
export const storeMessage = async ({
  creator,
  content,
}: StoreMessageParameter): Promise<MessageDoc> => {
  const data: MessageInterface = {
    creator: params.creator,
    contentOrigin: params.contentOrigin,
    contentJp: params.contentJp || '',
    isVerified: false,
  }

  // Create new message
  const message = new MessageModel(data)
  await message.save()

  return message
}

/**
 * Update existing message
 * @param _id message's id
 * @param creator message's creator
 * @param content message's content
 * @param isVerified message's isVerified
 * @returns new message document
 */
export const updateMessage = async (
  params: UpdateMessageParameter
): Promise<MessageDoc> => {
  const conditions = { _id: params._id }

  const data: MessageInterface = {
    creator: params.creator,
    contentOrigin: params.contentOrigin,
    contentJp: params.contentJp,
    isVerified: params.isVerified || false,
  }

  const options = {
    new: true,
  }

  const message = await MessageModel.findOneAndUpdate(conditions, data, options)

  if (!message) throw new TypeError('Message not found')
  return message
}

/**
 * Delete existing message
 * @param id message's id
 * @returns true if message is found and deleted successfully
 */
export const deleteMessage = async (_id: string): Promise<void> => {
  const result = await MessageModel.deleteOne({ _id })
  if (result.deletedCount === 0) throw new TypeError('message not found')
}

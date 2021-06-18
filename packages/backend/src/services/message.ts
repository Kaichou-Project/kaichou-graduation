import { MessageDoc, MessageInterface, MessageModel } from '@model/message'

/**
 * Get all messages
 * @returns array of message document
 */
export const getAllMessages = async (): Promise<MessageDoc[]> =>
  await MessageModel.find()

/**
 * Create new message
 * @param creator message's creator
 * @param content message's content
 * @returns new message document
 */
export const storeMessage = async (
  creator: string,
  content: string
): Promise<MessageDoc> => {
  const data: MessageInterface = {
    creator,
    avatarUrl: '',
    content,
    isVerified: false,
  }

  // Create new message
  const message = new MessageModel(data)
  await message.save()

  return message
}

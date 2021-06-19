import { MessageDoc, MessageInterface, MessageModel } from '@model/message'

/**
 * Get all messages
 * @returns array of message document
 */
export const getAllMessages = async (lastId:string, limit:number): Promise<MessageDoc[]> => {
  if(lastId === "NULL") {
    return await MessageModel.find().limit(limit);
  }
  return await MessageModel.find({ _id: { $gt: lastId } }).limit(limit);
}

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
    content,
    isVerified: false,
  }

  // Create new message
  const message = new MessageModel(data)
  await message.save()

  return message
}

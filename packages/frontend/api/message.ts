import {
  MessageInterface,
  MessageResponseInterface,
} from '../interfaces/message'
import axios from 'axios'

const messageInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function getMessages(
  limit?: number,
  lastId?: string
): Promise<MessageResponseInterface[]> {
  try {
    const res = await messageInstance.get('/message', {
      params: {
        limit,
        lastId,
      },
    })
    return res.data.content
  } catch (err) {
    throw TypeError(err.response.data.message)
  }
}

export async function createMessage(data: MessageInterface) {
  await messageInstance.post('/create/message', data)
}

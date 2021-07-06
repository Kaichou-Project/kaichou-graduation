import { AxiosResponse } from 'axios'
import { APIResponse } from '../interfaces/api'
import {
  MessageInterface,
  MessageResponseInterface,
} from '../interfaces/message'
import AxiosInstance from './axios'

export async function getMessages(
  limit?: number,
  lastId?: string
): Promise<MessageResponseInterface[]> {
  try {
    const res: AxiosResponse<APIResponse<MessageResponseInterface[]>> =
      await AxiosInstance.get('/message', {
        params: {
          limit,
          lastId,
        },
      })
    return res.data.content
  } catch (err) {
    throw TypeError(err.message)
  }
}

export async function createMessage(data: MessageInterface) {
  try {
    await AxiosInstance.post('/create/message', data)
  } catch (error) {
    if (error.response.status === 429) {
      throw new TypeError('Submission limit reached. Try again in an hour.')
    }
    throw new TypeError(error.message)
  }
}

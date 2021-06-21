import { MessageInterface } from '../interfaces/message'
import axios from 'axios'

const messageInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function createMessage(data: MessageInterface) {
  await messageInstance.post('/message', data)
}

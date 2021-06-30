import { MessageInterface } from '../interfaces/message'
import axios from 'axios'

const messageInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function getMessage(): Promise<MessageInterface[]> {
  return [
    {
      creator: 'test',
      content: '/temp-message-img.png',
    },
    {
      creator: 'test',
      content: '/temp-message-img.png',
    },
    {
      creator: 'test',
      content: '/temp-message-img.png',
    },
    {
      creator: 'test',
      content: '/temp-message-img.png',
    },
    {
      creator: 'test',
      content: '/temp-message-img.png',
    },
  ]

  // const res = await messageInstance.get('/message')
  // return res.data.content
}

export async function createMessage(data: MessageInterface) {
  await messageInstance.post('/message', data)
}

import {
  MessageInterface,
  MessageResponseInterface,
} from '../interfaces/message'
import axios from 'axios'

const messageInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function getMessage(): Promise<MessageResponseInterface[]> {
  return [
    {
      _id: 'somthing',
      creator: 'test',
      content: '/temp-message-img.png',
      createdAt: '2021-06-27T05:22:05.872+00:00',
    },
    {
      _id: 'somthing',
      creator: 'test',
      content: '/temp-message-img.png',
      createdAt: '2021-06-27T05:22:05.872+00:00',
    },
    {
      _id: 'somthing',
      creator: 'test',
      content: '/temp-message-img.png',
      createdAt: '2021-06-27T05:22:05.872+00:00',
    },
    {
      _id: 'somthing',
      creator: 'test',
      content: '/temp-message-img.png',
      createdAt: '2021-06-27T05:22:05.872+00:00',
    },
    {
      _id: 'somthing',
      creator: 'test',
      content: '/temp-message-img.png',
      createdAt: '2021-06-27T05:22:05.872+00:00',
    },
  ]

  // const res = await messageInstance.get('/message')
  // return res.data.content
}

export async function createMessage(data: MessageInterface) {
  await messageInstance.post('/message', data)
}

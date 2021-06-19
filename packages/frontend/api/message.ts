import { MessageInterface } from '../interfaces/message'
import axios from 'axios'

const messageInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/message`,
})

export async function createMessage(data: MessageInterface) {
  await messageInstance.post('', data)
}

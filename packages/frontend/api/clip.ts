import { ClipInterface } from '../interfaces/clip'
import axios from 'axios'

const clipInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function createClip(data: ClipInterface) {
  await clipInstance.post('/video', data)
}

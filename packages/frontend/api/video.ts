import { VideoInterface } from '../interfaces/video'
import axios from 'axios'

const videoInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function getVideo(): Promise<VideoInterface[]> {
  const res = await videoInstance.get('/video')
  return res.data.content
}

export async function createVideo(data: VideoInterface) {
  await videoInstance.post('/video', data)
}

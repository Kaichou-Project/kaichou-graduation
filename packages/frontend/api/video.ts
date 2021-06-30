import { VideoInterface, VideoResponseInterface } from '../interfaces/video'
import axios from 'axios'

const videoInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function getVideo(
  limit?: number,
  lastId?: string
): Promise<VideoResponseInterface[]> {
  try {
    const res = await videoInstance.get('/video', {
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

export async function createVideo(data: VideoInterface) {
  await videoInstance.post('/video', data)
}

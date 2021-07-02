import { AxiosResponse } from 'axios'
import { APIResponse } from '../interfaces/api'
import { VideoInterface, VideoResponseInterface } from '../interfaces/video'
import AxiosInstance from './axios'

export async function getVideo(
  limit?: number,
  lastId?: string
): Promise<VideoResponseInterface[]> {
  try {
    const res: AxiosResponse<APIResponse<VideoResponseInterface[]>> =
      await AxiosInstance.get('/video', {
        params: {
          limit,
          lastId,
        },
      })
    return res.data.content
  } catch (err) {
    if (err.response.data) {
      throw TypeError(err.response.data.message)
    }
    throw TypeError(err.message)
  }
}

export async function createVideo(data: VideoInterface) {
  try {
    await AxiosInstance.post('/create/video', data)
  } catch (error) {
    if (error.response.status === 429) {
      throw new TypeError('Submission limit reached. Try again in an hour.')
    }
    if (error.response.data) {
      throw new TypeError(error.response.data.message)
    }
    throw new TypeError(error.message)
  }
}

import { FanartInterface, FanartResponseInterface } from '../interfaces/fanart'
import axios from 'axios'

const fanartInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function getFanart(
  limit?: number,
  lastId?: string
): Promise<FanartResponseInterface[]> {
  try {
    const res = await fanartInstance.get('/fanart', {
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

export async function createFanart(data: FanartInterface) {
  await fanartInstance.post('/fanart', data)
}

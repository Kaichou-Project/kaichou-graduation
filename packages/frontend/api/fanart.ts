import { FanartInterface } from '../interfaces/fanart'
import axios from 'axios'

const fanartInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function getFanart(): Promise<FanartInterface[]> {
  // Just a temp for getFanart API
  // Todo : Remove this file when Video API ready
  const list: FanartInterface[] = []
  for (let i = 1; i <= 6; i++) {
    list.push({
      creator: 'Creator ' + i,
      imageUrl: `/temp-fanart/${i}.png`,
    })
  }
  return list
}

export async function createFanart(data: FanartInterface) {
  await fanartInstance.post('/fanart', data)
}

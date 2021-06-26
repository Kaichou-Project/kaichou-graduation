import { FanartInterface } from '../interfaces/fanart'
import axios from 'axios'

const fanartInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export async function createFanart(data: FanartInterface) {
  await fanartInstance.post('/fanart', data)
}

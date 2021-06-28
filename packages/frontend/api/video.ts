import { VideoInterface } from '../interfaces/video'
import https from 'https'

export async function createVideo(data: VideoInterface) {
  const options = {
    method: 'POST',
    hostname: process.env.NEXT_PUBLIC_API_HOSTNAME ?? 'localhost',
    port: process.env.NEXT_PUBLIC_API_PORT ?? 5000,
    path: '/public/v1/create/video',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return new Promise((resolve, reject) => {
    const req = https
      .request(options, (res) => {
        res.resume()
      })
      .on('response', (res) => {
        if (res.statusCode == 429) {
          reject(new Error('Submission limit reached. Try again in an hour.'))
        }
        resolve(undefined)
      })

    const body = JSON.stringify(data)

    req.write(body)

    req.end()
  })
}

import axios from 'axios'
import https from 'https'

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
  requestCert: true,
})

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  httpsAgent,
})

export default AxiosInstance

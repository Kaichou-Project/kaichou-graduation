import axios from 'axios'

const baseURL = 'https://www.google.com/recaptcha/api/siteverify'
const secretKey = process.env.CAPTCHA_SECRET_KEY

export async function verifyCaptchaToken(token: string): Promise<boolean> {
  if (!token) return false
  const url = `${baseURL}?secret=${secretKey}&response=${token}`
  const res = await axios.post(url)
  console.log(res.data)

  return true
}

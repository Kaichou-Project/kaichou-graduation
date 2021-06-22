import axios from 'axios'

export async function verifyCaptchaToken(token: string): Promise<boolean> {
  if (!token) return false

  const secret = process.env.CAPTCHA_SECRET_KEY
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  const res = await axios.post(url)

  if (res.data.success) return true
  else return false
}

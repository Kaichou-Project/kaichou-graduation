import axios from 'axios'

let CAPTCHA_SECRET_KEY: string
function getSecretKey(): string {
  if (CAPTCHA_SECRET_KEY) return CAPTCHA_SECRET_KEY

  const secret = process.env.CAPTCHA_SECRET_KEY as string
  // Check if secret key empty or still the default value
  if (!secret || secret == 'your-google-recaptcha-secretkey') {
    // Error message for backend log only, not for client
    console.error(
      'Error : Google Recaptcha secret key has not been set in environment'
    )

    // Error message for client
    throw new TypeError(
      'Something wrong with Captcha Token, please contact admin'
    )
  }
  return secret
}

export async function verifyCaptchaToken(token: string): Promise<boolean> {
  if (!token) return false

  const secret = getSecretKey()
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  const res = await axios.post(url)

  if (res.data.success) return true
  else return false
}

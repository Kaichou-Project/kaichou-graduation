import axios from 'axios'
import logger from '@logger'

// Check if secret key is empty or still the default value
const secretKeyIsValid =
  process.env.CAPTCHA_SECRET_KEY &&
  process.env.CAPTCHA_SECRET_KEY !== 'your-google-recaptcha-secretkey'

function getSecretKey(): string {
  if (secretKeyIsValid) return process.env.CAPTCHA_SECRET_KEY as string
  else {
    // Error message for backend log only, not for client
    logger.error('Google Recaptcha secret key has not been set in environment')

    // Error message for client
    throw new TypeError(
      'Something wrong with Captcha Token, please contact admin'
    )
  }
}

export async function verifyCaptchaToken(token: string): Promise<boolean> {
  if (!token) return false

  const secret = getSecretKey()
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  const res = await axios.post(url)

  if (res.data.success) return true
  else return false
}

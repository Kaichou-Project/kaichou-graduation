import React, { useCallback } from 'react'
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import styles from './Form.module.scss'

interface propsInterface {
  onVerify: (token: string) => void
  getToken: number
}

export default function Captcha({ onVerify, getToken }: propsInterface) {
  const handleReCaptchaVerify = useCallback(
    (token) => {
      onVerify(token)
      console.log('Captcha verified')
    },
    [getToken]
  )

  return (
    <div className={styles.captcha}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
      >
        <GoogleReCaptcha onVerify={handleReCaptchaVerify} />
      </GoogleReCaptchaProvider>
    </div>
  )
}

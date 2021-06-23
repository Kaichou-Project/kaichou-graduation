import React, { useCallback, useState } from 'react'
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import styles from './Form.module.scss'

interface propsInterface {
  onVerify: (token: string) => void
}

export default function Captcha({ onVerify }: propsInterface) {
  const [token, setToken] = useState('')
  const [noOfVerifications, setNoOfVerifications] = useState(0)

  const handleReCaptchaVerify = useCallback(
    (token) => {
      setToken(token)
      setNoOfVerifications((noOfVerifications) => noOfVerifications + 1)
      onVerify(token)
      console.log('Captcha verified')
    },
    [setNoOfVerifications, setToken]
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

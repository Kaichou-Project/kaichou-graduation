import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './Form.module.scss'

interface propsInterface {
  error: string
  onChange: (token: string) => void
}

export default function Captcha({ error, onChange }: propsInterface) {
  return (
    <div className={styles.captcha}>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
        onChange={onChange}
        badge="bottomleft"
      />
      {error && <div className={styles.error_msg}>{error}</div>}
    </div>
  )
}

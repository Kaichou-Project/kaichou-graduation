import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './Form.module.scss'

interface propsInterface {
  error: string
  onChange: (token: string) => void
}

export default function Captcha({ error, onChange }: propsInterface) {
  return (
    <div className={'styles.confirm'}>
      <ReCAPTCHA
        sitekey="6Lco20sbAAAAAPYbbT3TIKK1_DMS9OigbzTBtSdR"
        onChange={onChange}
      />
      {error && <div className={styles.error_msg}>{error}</div>}
    </div>
  )
}

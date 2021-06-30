import React from 'react'
import styles from './Form.module.scss'
interface propsInterface {
  name: string
  error: string
}

export default function CheckConfirm({ name, error }: propsInterface) {
  return (
    <div className={styles.confirm}>
      <div>
        <label className={styles.check_container}>
          <input type="checkbox" name={name} />
          <span />
        </label>
      </div>
      <div>
        I hereby confirm that all the content contained in my submission is my
        own or I have explicit permission by the author to use it.
        {error && <div className={styles.error_msg}>{error}</div>}
      </div>
    </div>
  )
}

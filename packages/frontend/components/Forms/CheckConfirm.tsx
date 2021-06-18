import React from 'react'
import styles from '../../styles/Form.module.scss'
import PropTypes from 'prop-types'

export default function CheckConfirm({ name, error }) {
  return (
    <div className={styles.confirm}>
      <label className={styles.check_container}>
        <input type="checkbox" name={name} />
        <span />
      </label>
      <div>
        I hereby confirm that all the content contained in my submission is my
        own or i have explicit permission by the author to use them.
        {error && <div className={styles.error_msg}>{error}</div>}
      </div>
    </div>
  )
}

CheckConfirm.propTypes = {
  name: PropTypes.string,
  error: PropTypes.string,
}

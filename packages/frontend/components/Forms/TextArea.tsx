import React from 'react'
import styles from '../../styles/Form.module.scss'
import PropTypes from 'prop-types'

export default function TextArea({ name, label, error }) {
  return (
    <div className={styles.textInput}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} rows={4} />
      {error && <div className={styles.error_msg}>{error}</div>}
    </div>
  )
}

TextArea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
}

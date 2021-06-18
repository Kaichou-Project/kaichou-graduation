import React from 'react'
import PropTypes from 'prop-types'
import styles from './Form.module.scss'

export default function TextInput({ name, label, error }) {
  return (
    <div className={styles.textInput}>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} />
      {error && <div className={styles.error_msg}>{error}</div>}
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
}

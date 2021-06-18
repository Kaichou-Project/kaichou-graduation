import React from 'react'
import styles from '../../styles/Form.module.scss'
import PropTypes from 'prop-types'

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

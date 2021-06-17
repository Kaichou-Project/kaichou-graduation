import React from 'react'
import styles from '../styles/Form.module.scss'
import PropTypes from 'prop-types'

export default function TextInput({ label }) {
  return (
    <div className={styles.textInput}>
      <label>{label}</label>
      <input type="text" />
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
}

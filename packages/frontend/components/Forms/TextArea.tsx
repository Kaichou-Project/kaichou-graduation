import React from 'react'
import styles from '../../styles/Form.module.scss'
import PropTypes from 'prop-types'

export default function TextArea({ name, label }) {
  return (
    <div className={styles.textInput}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} rows={4} />
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
}

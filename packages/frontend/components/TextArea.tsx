import React from 'react'
import styles from '../styles/Form.module.scss'
import PropTypes from 'prop-types'

export default function TextArea({ label }) {
  return (
    <div className={styles.textInput}>
      <label>{label}</label>
      <textarea rows={4} />
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
}

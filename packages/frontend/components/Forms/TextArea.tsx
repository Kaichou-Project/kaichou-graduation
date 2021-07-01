import React from 'react'
import styles from './Form.module.scss'

interface propsInterface {
  name: string
  label: string
  error: string
  onChange?: (name: string, val: string) => void
}

export default function TextArea(props: propsInterface) {
  const { name, label, error, onChange } = props
  return (
    <div className={styles.textInput}>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        rows={4}
        onChange={onChange && ((evt) => onChange(name, evt.target.value))}
      />
      {error && <div className={styles.error_msg}>{error}</div>}
    </div>
  )
}

import React from 'react'
import TextInput from '../components/TextInput'
import TextArea from '../components/TextArea'
import styles from '../styles/Form.module.scss'

export default function FormMessage() {
  function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)
    const object = {}
    formData.forEach(function (value, key) {
      object[key] = value
    })
    console.log(object)
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <TextInput name="name" label="My name is ..." />
      <TextInput
        name="profile-picture"
        label="A link to my profile picture is here (optional) ..."
      />
      <TextArea name="message" label="My message to Coco is ...." />
      <div style={{ color: 'white' }}>---- Preview goes here ----</div>
      <input type="submit" className={styles.button_submit} value="Submit" />
    </form>
  )
}

import React from 'react'
import TextInput from './TextInput'
import CheckConfirm from './CheckConfirm'
import PropTypes from 'prop-types'
import styles from '../../styles/Form.module.scss'

interface dataType {
  creator: string
  image_url: string
}

export default function FormFanart({ hidden }) {
  function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const confirmation = !!formData.get('confirmation')
    formData.delete('confirmation')

    const data = {} as dataType
    formData.forEach(function (value, key) {
      data[key] = value
    })

    data.creator = data.creator.trim()
    if (!data.creator) return console.log('Error: No creator')

    if (!data.image_url) return console.log('Error: No image_url')

    if (!confirmation) return console.log('Error: Not confirmed')

    console.log(data)
  }

  return (
    <form
      className={`${styles.form} ${hidden ? styles.hide : ''}`}
      onSubmit={onSubmit}
    >
      <TextInput name="creator" label="The artist’s name is ..." />
      <TextInput name="image_url" label="The link to the image is ..." />

      {/*ToDo remove when preview component donk*/}
      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>
      <CheckConfirm name="confirmation" />
      <input type="submit" className={styles.button_submit} value="Submit" />
    </form>
  )
}

FormFanart.propTypes = {
  hidden: PropTypes.bool,
}

import React, { useState } from 'react'
import TextInput from './TextInput'
import CheckConfirm from './CheckConfirm'
import PropTypes from 'prop-types'
import styles from './Form.module.scss'

interface dataType {
  creator: string
  image_url: string
}

interface errorType {
  creator?: string
  image_url?: string
  confirmation?: string
}

export default function FormFanart({ hidden }) {
  const [errors, setErrors] = useState<errorType>({})

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
    if (!data.creator) {
      return setErrors({ creator: "This field can't be empty" })
    }

    if (!data.image_url) {
      return setErrors({ image_url: "This field can't be empty" })
    }

    if (!confirmation) {
      return setErrors({ confirmation: 'You must confirm this' })
    }

    setErrors({})

    // ToDo call API to send data
    console.log(data)
  }

  return (
    <form
      className={`${styles.form} ${hidden ? styles.hide : ''}`}
      onSubmit={onSubmit}
    >
      <TextInput
        name="creator"
        label="The artist’s name is ..."
        error={errors.creator}
      />

      <TextInput
        name="image_url"
        label="The link to the image is ..."
        error={errors.image_url}
      />

      <h2>Preview</h2>

      {/*ToDo remove when preview component donk*/}
      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>

      <CheckConfirm name="confirmation" error={errors.confirmation} />

      <input type="submit" className={styles.button_submit} value="Submit" />
    </form>
  )
}

FormFanart.propTypes = {
  hidden: PropTypes.bool,
}

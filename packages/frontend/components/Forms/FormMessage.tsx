import React, { useState } from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'
import CheckConfirm from './CheckConfirm'
import PropTypes from 'prop-types'
import styles from './Form.module.scss'

interface dataType {
  creator: string
  avatar_url: string
  content: string
}

interface errorType {
  creator?: string
  avatar_url?: string
  content?: string
  confirmation?: string
}

export default function FormMessage({ hidden }) {
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

    data.avatar_url = data.avatar_url.trim()

    if (!data.content) {
      return setErrors({ content: "This field can't be empty" })
    }

    if (!confirmation) {
      return setErrors({ confirmation: 'You must confirm this' })
    }

    // ToDo call API to send data
    console.log(data)
  }

  return (
    <form
      className={`${styles.form} ${hidden ? styles.hide : ''}`}
      onSubmit={onSubmit}
    >
      <TextInput name="creator" label="My name is ..." error={errors.creator} />

      <TextInput
        name="avatar_url"
        label="A link to my profile picture is here (optional) ..."
        error={errors.avatar_url}
      />

      <TextArea
        name="content"
        label="My message to Coco is ...."
        error={errors.content}
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

FormMessage.propTypes = {
  hidden: PropTypes.bool,
}

import React, { useState } from 'react'
import TextInput from './TextInput'
import CheckConfirm from './CheckConfirm'
import SubmitButton from './SubmitButton'
import { formDataToObject } from '../../utils/formData'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
  captchaToken: string
  onSubmit?: () => void
}

interface dataType {
  creator: string
  image_url: string
}

interface errorType {
  submission?: string
  creator?: string
  image_url?: string
  confirmation?: string
}

export default function FormFanart(props: propsInterface) {
  const { hidden, captchaToken, onSubmit } = props
  const [errors, setErrors] = useState<errorType>({})

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const confirmation = !!formData.get('confirmation')
    formData.delete('confirmation')

    const data = formDataToObject(formData) as dataType

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

    onSubmit()

    // ToDo call API to send data
    console.log(data)
  }

  return (
    <form
      className={`${styles.form} ${hidden ? styles.hide : ''}`}
      onSubmit={handleSubmit}
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

      {/*ToDo remove when preview component done*/}
      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>

      <CheckConfirm name="confirmation" error={errors.confirmation} />

      <SubmitButton error={errors.submission} />
    </form>
  )
}

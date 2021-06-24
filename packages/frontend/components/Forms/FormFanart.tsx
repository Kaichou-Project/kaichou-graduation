import React, { useState } from 'react'
import TextInput from './TextInput'
import CheckConfirm from './CheckConfirm'
import { FanartInterface } from '../../interfaces/fanart'
import { createFanart } from '../../api/fanart'
import { formDataToObject } from '../../utils/formData'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
}

interface errorType {
  submission?: string
  creator?: string
  imageUrl?: string
  confirmation?: string
}

export default function FormFanart({ hidden }: propsInterface) {
  const [errors, setErrors] = useState<errorType>({})

  async function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const confirmation = !!formData.get('confirmation')
    formData.delete('confirmation')

    const data = formDataToObject(formData) as FanartInterface

    data.creator = data.creator.trim()
    if (!data.creator) {
      return setErrors({ creator: "This field can't be empty" })
    }

    if (!data.imageUrl) {
      return setErrors({ imageUrl: "This field can't be empty" })
    }

    if (!confirmation) {
      return setErrors({ confirmation: 'You must confirm this' })
    }

    setErrors({})

    try {
      await createFanart(data)

      // ToDo : Do something if success
      console.log('success')
    } catch (err) {
      const message = err.response.data.message
      setErrors({ submission: message })
    }
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
        name="imageUrl"
        label="The link to the image is ..."
        error={errors.imageUrl}
      />

      <h2>Preview</h2>

      {/*ToDo remove when preview component done*/}
      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>

      <CheckConfirm name="confirmation" error={errors.confirmation} />

      <input type="submit" className={styles.button_submit} value="Submit" />
    </form>
  )
}

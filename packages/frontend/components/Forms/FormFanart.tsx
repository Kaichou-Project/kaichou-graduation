import React, { useState } from 'react'
import TextInput from './TextInput'
import CheckConfirm from './CheckConfirm'
import SubmitButton from './SubmitButton'
import { formDataToObject } from '../../utils/formData'
import { FanartInterface } from '../../interfaces/fanart'
import { createFanart } from '../../api/fanart'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
  onSuccess: () => void
}

interface dataType extends FanartInterface {
  creator: string
  imageUrl: string
}

interface errorType {
  submission?: string
  creator?: string
  imageUrl?: string
  confirmation?: string
}

export default function FormFanart(props: propsInterface) {
  const { hidden, onSuccess } = props
  const [errors, setErrors] = useState<errorType>({})

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const confirmation = !!formData.get('confirmation')
    formData.delete('confirmation')

    const data = formDataToObject(formData) as dataType

    data.creator = data.creator.trim()
    if (!data.creator) {
      return setErrors({ creator: "This field can't be empty" })
    }

    data.imageUrl = data.imageUrl.trim()
    if (!data.imageUrl) {
      return setErrors({ imageUrl: "This field can't be empty" })
    }

    if (!confirmation) {
      return setErrors({ confirmation: 'You must confirm this to submit' })
    }

    setErrors({})

    try {
      await createFanart(data)

      onSuccess()
    } catch (err) {
      const message = err.message
      setErrors({ submission: message })
    }
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
        name="imageUrl"
        label="The link to the image is ..."
        error={errors.imageUrl}
      />

      {/*TODO: uncomment when preview component done*/}
      {/*<h2>Preview</h2>

      
      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>*/}

      <CheckConfirm name="confirmation" error={errors.confirmation} />

      <SubmitButton error={errors.submission} />
    </form>
  )
}

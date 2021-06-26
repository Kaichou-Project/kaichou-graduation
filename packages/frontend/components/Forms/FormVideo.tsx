import React, { useState } from 'react'
import TextInput from './TextInput'
import CheckConfirm from './CheckConfirm'
import { VideoInterface } from '../../interfaces/video'
import { createVideo } from '../../api/video'
import SubmitButton from './SubmitButton'
import { formDataToObject } from '../../utils/formData'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
  captchaToken: string
  onSubmit?: () => void
  onSuccess?: () => void
  onFail?: () => void
}

interface dataType extends VideoInterface {
  captchaToken: string
}

interface errorType {
  submission?: string
  creator?: string
  videoEmbedUrl?: string
  confirmation?: string
}

export default function FormVideo(props: propsInterface) {
  const { hidden, captchaToken, onSubmit, onSuccess, onFail } = props
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

    if (!data.videoEmbedUrl) {
      return setErrors({ videoEmbedUrl: "This field can't be empty" })
    }

    if (!confirmation) {
      return setErrors({ confirmation: 'You must confirm this' })
    }

    if (!captchaToken) {
      return setErrors({ submission: 'Something wrong with Captcha' })
    }
    data.captchaToken = captchaToken

    setErrors({})

    if (onSubmit) onSubmit()

    try {
      await createVideo(data)
      if (onSuccess) onSuccess()
    } catch (err) {
      const message = err.response.data.message
      setErrors({ submission: message })
      if (onFail) onFail()
    }
  }

  return (
    <form
      className={`${styles.form} ${hidden ? styles.hide : ''}`}
      onSubmit={handleSubmit}
    >
      <TextInput
        name="creator"
        label="The creator’s name is ..."
        error={errors.creator}
      />

      <TextInput
        name="videoEmbedUrl"
        label="The link to the video is ..."
        error={errors.videoEmbedUrl}
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

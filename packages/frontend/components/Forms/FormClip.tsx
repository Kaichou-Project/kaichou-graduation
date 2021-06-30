import React, { useState } from 'react'
import TextInput from './TextInput'
import { ClipInterface } from '../../interfaces/clip'
import { createClip } from '../../api/clip'
import SubmitButton from './SubmitButton'
import { formDataToObject } from '../../utils/formData'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
  onSubmit?: () => void
  onSuccess?: () => void
  onFail?: () => void
}

interface errorType {
  submission?: string
  creator?: string
  title?: string
  videoEmbedUrl?: string
}

export default function FormClip(props: propsInterface) {
  const { hidden, onSubmit, onSuccess, onFail } = props
  const [errors, setErrors] = useState<errorType>({})

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const data = formDataToObject(formData) as ClipInterface

    data.videoEmbedUrl = data.videoEmbedUrl.trim()
    if (!data.videoEmbedUrl) {
      return setErrors({ videoEmbedUrl: "This field can't be empty" })
    }

    // Title and creator can't be empty or else it won't be sent in the request
    // These metadata will be verified manually
    data.creator = 'none'
    data.title = 'none'

    setErrors({})

    if (onSubmit) onSubmit()

    try {
      await createClip(data)

      if (onSuccess) onSuccess()
    } catch (err) {
      const message = err.message
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
        name="videoEmbedUrl"
        label="The link to the video is ..."
        error={errors.videoEmbedUrl}
      />

      <h2>Preview</h2>

      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>

      <SubmitButton error={errors.submission} />
    </form>
  )
}

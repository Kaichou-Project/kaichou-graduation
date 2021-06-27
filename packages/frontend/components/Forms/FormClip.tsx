import React, { useState } from 'react'
import TextInput from './TextInput'
import SubmitButton from './SubmitButton'
import { formDataToObject } from '../../utils/formData'
import { VideoInterface } from '../../interfaces/video'
import { createVideo } from '../../api/video'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
  onSuccess: () => void
}

interface dataType extends VideoInterface {
  creator: string
  title: string
  videoEmbedUrl: string
}

interface errorType {
  submission?: string
  creator?: string
  videoEmbedUrl?: string
  confirmation?: string
}

export default function FormClip(props: propsInterface) {
  const { hidden, onSuccess } = props
  const [errors, setErrors] = useState<errorType>({})

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const data = formDataToObject(formData) as dataType

    data.videoEmbedUrl = data.videoEmbedUrl.trim()
    if (!data.videoEmbedUrl) {
      return setErrors({ videoEmbedUrl: "This field can't be empty" })
    }

    // Title and creator can't be empty or else it won't be sent in the request
    data.creator = 'none'
    data.title = 'none'

    setErrors({})

    try {
      await createVideo(data)

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
        name="videoEmbedUrl"
        label="The link to the video is ..."
        error={errors.videoEmbedUrl}
      />

      {/*TODO: uncomment when preview component done*/}
      {/*<h2>Preview</h2>
      
      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>*/}

      <SubmitButton error={errors.submission} />
    </form>
  )
}

import React, { useState, useRef } from 'react'
import TextInput from './TextInput'
import { VideoInterface } from '../../interfaces/video'
import { createVideo } from '../../api/video'
import SubmitButton from './SubmitButton'
import VideoCard from '../Video/Video'
import { getFormData } from '../../utils/formData'
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

export default function FormVideo(props: propsInterface) {
  const { hidden, onSubmit, onSuccess, onFail } = props
  const [preview, setPreview] = useState<VideoInterface>(null)
  const [errors, setErrors] = useState<errorType>({})
  const formEl = useRef(null)

  function validate(data: VideoInterface, showError: boolean): boolean {
    if (!data.videoEmbedUrl) {
      if (showError) setErrors({ videoEmbedUrl: "This field can't be empty" })
      return false
    }

    return true
  }

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const data = getFormData(formEl.current) as VideoInterface

    if (!validate(data, true)) return
    data.creator = 'none'
    data.title = 'none'

    setErrors({})

    if (onSubmit) onSubmit()

    try {
      await createVideo(data)
      if (onSuccess) onSuccess()
    } catch (err) {
      const message = err.message
      setErrors({ submission: message })
      if (onFail) onFail()
    }
  }

  function handleChange() {
    const data = getFormData(formEl.current) as VideoInterface
    if (validate(data, false)) setPreview(data)
    else setPreview(null)
  }

  return (
    <form
      ref={formEl}
      className={`${styles.form} ${hidden ? styles.hide : ''}`}
      onSubmit={handleSubmit}
    >
      <TextInput
        name="videoEmbedUrl"
        label="The link to the video is ..."
        onChange={handleChange}
        error={errors.videoEmbedUrl}
      />

      <h2>Preview</h2>
      {preview && <VideoCard video={preview} />}

      <SubmitButton error={errors.submission} />
    </form>
  )
}

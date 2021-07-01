import React, { useState, useRef } from 'react'
import TextInput from './TextInput'
import CheckConfirm from './CheckConfirm'
import { VideoInterface } from '../../interfaces/video'
import { createVideo } from '../../api/video'
import SubmitButton from './SubmitButton'
import VideoCard from '../Video/Video'
import { getFormData } from '../../utils/formData'
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
  confirmation?: string
}

interface errorType {
  submission?: string
  creator?: string
  title?: string
  videoEmbedUrl?: string
  confirmation?: string
}

export default function FormVideo(props: propsInterface) {
  const { hidden, captchaToken, onSubmit, onSuccess, onFail } = props
  const [preview, setPreview] = useState<dataType>(null)
  const [errors, setErrors] = useState<errorType>({})
  const formEl = useRef(null)

  function validate(data: dataType, showError: boolean): boolean {
    data.creator = data.creator.trim()
    if (!data.creator) {
      if (showError) setErrors({ creator: "This field can't be empty" })
      return false
    }

    if (!data.title) {
      if (showError) setErrors({ title: "This field can't be empty" })
      return false
    }

    if (!data.videoEmbedUrl) {
      if (showError) setErrors({ videoEmbedUrl: "This field can't be empty" })
      return false
    }

    return true
  }

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const data = getFormData(formEl.current) as dataType

    if (!validate(data, true)) return

    const confirmation = !!data.confirmation
    delete data.confirmation

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

  function handleChange() {
    const data = getFormData(formEl.current) as dataType
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
        name="creator"
        label="The creator’s name is ..."
        onChange={handleChange}
        error={errors.creator}
      />

      <TextInput
        name="title"
        label="The title of the video is ..."
        onChange={handleChange}
        error={errors.title}
      />

      <TextInput
        name="videoEmbedUrl"
        label="The link to the video is ..."
        onChange={handleChange}
        error={errors.videoEmbedUrl}
      />

      <h2>Preview</h2>
      {preview && <VideoCard video={preview} />}

      <CheckConfirm name="confirmation" error={errors.confirmation} />

      <SubmitButton error={errors.submission} />
    </form>
  )
}

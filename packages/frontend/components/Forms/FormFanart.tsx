import React, { useState, useRef } from 'react'
import TextInput from './TextInput'
import CheckConfirm from './CheckConfirm'
import { FanartInterface } from '../../interfaces/fanart'
import { createFanart } from '../../api/fanart'
import SubmitButton from './SubmitButton'
import FanartCard from '../Fanart/FanartCard'
import { getFormData } from '../../utils/formData'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
  onSubmit?: () => void
  onSuccess?: () => void
  onFail?: () => void
}

interface dataType extends FanartInterface {
  confirmation?: string
}

interface errorType {
  submission?: string
  creator?: string
  imageUrl?: string
  confirmation?: string
}

export default function FormFanart(props: propsInterface) {
  const { hidden, onSubmit, onSuccess, onFail } = props
  const [preview, setPreview] = useState<dataType>(null)
  const [errors, setErrors] = useState<errorType>({})
  const formEl = useRef(null)

  function validate(data: dataType, showError: boolean): boolean {
    data.creator = data.creator.trim()
    if (!data.creator) {
      if (showError) setErrors({ creator: "This field can't be empty" })
      return false
    }

    if (!data.imageUrl) {
      if (showError) setErrors({ imageUrl: "This field can't be empty" })
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

    setErrors({})

    if (onSubmit) onSubmit()

    try {
      await createFanart(data)
      if (onSuccess) onSuccess()
    } catch (err) {
      const message = err.message
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
        label="The artist’s name is ..."
        onChange={handleChange}
        error={errors.creator}
      />

      <TextInput
        name="imageUrl"
        label="The link to the image is ..."
        onChange={handleChange}
        error={errors.imageUrl}
      />

      <h2>Preview</h2>
      {preview && <FanartCard {...preview} />}

      <CheckConfirm name="confirmation" error={errors.confirmation} />

      <SubmitButton error={errors.submission} />
    </form>
  )
}

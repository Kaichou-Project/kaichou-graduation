import React, { useState, useRef } from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'
import CheckConfirm from './CheckConfirm'
import SubmitButton from './SubmitButton'
import { MessageInterface } from '../../interfaces/message'
import { createMessage } from '../../api/message'
import { getFormData } from '../../utils/formData'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
  captchaToken: string
  onSubmit?: () => void
  onSuccess?: () => void
  onFail?: () => void
}

interface dataType extends MessageInterface {
  captchaToken: string
  confirmation?: string
}

interface errorType {
  submission?: string
  creator?: string
  content?: string
  confirmation?: string
}

export default function FormMessage(props: propsInterface) {
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

    if (!data.content) {
      if (showError) setErrors({ content: "This field can't be empty" })
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
      await createMessage(data)
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
        label="My name is ..."
        onChange={handleChange}
        error={errors.creator}
      />

      <TextArea
        name="content"
        label="My message to Coco is ...."
        onChange={handleChange}
        error={errors.content}
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

import React, { useState, useRef } from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'
import SubmitButton from './SubmitButton'
import { MessageInterface } from '../../interfaces/message'
import { createMessage } from '../../api/message'
import MessageCard from '../MessageCards/MessageCard'
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
  content?: string
}

export default function FormMessage(props: propsInterface) {
  const { hidden, onSubmit, onSuccess, onFail } = props
  const [preview, setPreview] = useState<MessageInterface>(null)
  const [errors, setErrors] = useState<errorType>({})
  const formEl = useRef(null)

  function validate(data: MessageInterface, showError: boolean): boolean {
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

    const data = getFormData(formEl.current) as MessageInterface

    if (!validate(data, true)) return

    setErrors({})

    if (onSubmit) onSubmit()

    try {
      await createMessage(data)
      if (onSuccess) onSuccess()
    } catch (err) {
      const message = err.message
      setErrors({ submission: message })
      if (onFail) onFail()
    }
  }

  function handleChange() {
    const data = getFormData(formEl.current) as MessageInterface
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
      {preview && <MessageCard {...preview} />}

      <SubmitButton error={errors.submission} />
    </form>
  )
}

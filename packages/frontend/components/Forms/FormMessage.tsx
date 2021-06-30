import React, { useState } from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'
import SubmitButton from './SubmitButton'
import { MessageInterface } from '../../interfaces/message'
import { createMessage } from '../../api/message'
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
  content?: string
}

export default function FormMessage(props: propsInterface) {
  const { hidden, onSubmit, onSuccess, onFail } = props
  const [errors, setErrors] = useState<errorType>({})

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const data = formDataToObject(formData) as MessageInterface

    data.creator = data.creator.trim()
    if (!data.creator) {
      return setErrors({ creator: "This field can't be empty" })
    }

    if (!data.content) {
      return setErrors({ content: "This field can't be empty" })
    }

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

  return (
    <form
      className={`${styles.form} ${hidden ? styles.hide : ''}`}
      onSubmit={handleSubmit}
    >
      <TextInput name="creator" label="My name is ..." error={errors.creator} />

      <TextArea
        name="content"
        label="My message to Coco is ...."
        error={errors.content}
      />

      <h2>Preview</h2>

      {/*ToDo remove when preview component done*/}
      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>

      <SubmitButton error={errors.submission} />
    </form>
  )
}

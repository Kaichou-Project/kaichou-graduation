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
  onSuccess: () => void
}

interface dataType extends MessageInterface {
  creator: string
  content: string
}

interface errorType {
  submission?: string
  creator?: string
  content?: string
  confirmation?: string
}

export default function FormMessage(props: propsInterface) {
  const { hidden, onSuccess } = props
  const [errors, setErrors] = useState<errorType>({})

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const data = formDataToObject(formData) as dataType

    data.creator = data.creator.trim()
    if (!data.creator) {
      return setErrors({ creator: "This field can't be empty" })
    }

    data.content = data.content.trim()
    if (!data.content) {
      return setErrors({ content: "This field can't be empty" })
    }

    setErrors({})

    try {
      await createMessage(data)

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
      <TextInput name="creator" label="My name is ..." error={errors.creator} />

      <TextArea
        name="content"
        label="My message to Coco is ...."
        error={errors.content}
      />

      {/*TODO: Uncomment when preview component is done*/}
      {/*<h2>Preview</h2>

      <div style={{ color: 'white', textAlign: 'center', margin: 40 }}>
        ---- Preview goes here ----
      </div>*/}

      <SubmitButton error={errors.submission} />
    </form>
  )
}

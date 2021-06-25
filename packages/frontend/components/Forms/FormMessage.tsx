import React, { useState } from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'
import CheckConfirm from './CheckConfirm'
import SubmitButton from './SubmitButton'
import { MessageInterface } from '../../interfaces/message'
import { createMessage } from '../../api/message'
import { formDataToObject } from '../../utils/formData'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
  captchaToken: string
  onSubmit?: () => void
}

interface dataType extends MessageInterface {
  creator: string
  avatar_url: string
  content: string
  captchaToken: string
}

interface errorType {
  submission?: string
  creator?: string
  content?: string
  confirmation?: string
}

export default function FormMessage(props: propsInterface) {
  const { hidden, captchaToken, onSubmit } = props
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

    if (!data.content) {
      return setErrors({ content: "This field can't be empty" })
    }

    if (!confirmation) {
      return setErrors({ confirmation: 'You must confirm this' })
    }

    if (!captchaToken) {
      return setErrors({ submission: 'Something wrong with Captcha' })
    }
    data.captchaToken = captchaToken

    setErrors({})

    onSubmit()

    try {
      await createMessage(data)

      // ToDo : Do something if success
      console.log('success')
    } catch (err) {
      const message = err.response.data.message
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

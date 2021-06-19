import React, { useState } from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'
import CheckConfirm from './CheckConfirm'
import { MessageInterface } from '../../interfaces/message'
import { createMessage } from '../../api/message'
import { formDataToObject } from '../../utils/formData'
import styles from './Form.module.scss'

interface propsInterface {
  hidden: boolean
}

interface errorType {
  submission?: string
  creator?: string
  avatar_url?: string
  content?: string
  confirmation?: string
}

export default function FormMessage({ hidden }: propsInterface) {
  const [errors, setErrors] = useState<errorType>({})

  async function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    const formData = new FormData(evt.currentTarget)

    const confirmation = !!formData.get('confirmation')
    formData.delete('confirmation')

    const data = formDataToObject(formData) as MessageInterface

    data.creator = data.creator.trim()
    if (!data.creator) {
      return setErrors({ creator: "This field can't be empty" })
    }

    // Currently doesn't exist in backend
    // data.avatar_url = data.avatar_url.trim()

    if (!data.content) {
      return setErrors({ content: "This field can't be empty" })
    }

    if (!confirmation) {
      return setErrors({ confirmation: 'You must confirm this' })
    }

    setErrors({})

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
      onSubmit={onSubmit}
    >
      {errors.submission && (
        <div className={styles.error_msg}>{errors.submission}</div>
      )}

      <TextInput name="creator" label="My name is ..." error={errors.creator} />

      <TextInput
        name="avatar_url"
        label="A link to my profile picture is here (optional) ..."
        error={errors.avatar_url}
      />

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

      <input type="submit" className={styles.button_submit} value="Submit" />
    </form>
  )
}

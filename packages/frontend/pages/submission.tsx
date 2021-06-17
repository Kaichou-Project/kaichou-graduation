import React from 'react'
import TextInput from '../components/TextInput'
import TextArea from '../components/TextArea'
import Form from '../components/Form'
import FormTabs from '../components/FormTabs'
import Footer from '../components/Footer'
import styles from '../styles/Form.module.scss'

export default function Submission() {
  return (
    <>
      <Form>
        <FormTabs />
        <TextInput label="My name is ..." />
        <TextInput label="A link to my profile picture is here (optional) ..." />
        <TextArea label="My message to Coco is ...." />
        <div style={{ color: 'white' }}>---- Preview goes here ----</div>
        <div className={styles.button_submit}>Submit</div>
      </Form>
      <Footer />
    </>
  )
}

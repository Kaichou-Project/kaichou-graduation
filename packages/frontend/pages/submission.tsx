import React from 'react'
import TextInput from '../components/TextInput'
import TextArea from '../components/TextArea'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Submission() {
  return (
    <>
      <Form>
        <TextInput label="My name is ..." />
        <TextInput label="A link to my profile picture is here (optional) ..." />
        <TextArea label="My message to Coco is ...." />
      </Form>
      <Footer />
    </>
  )
}

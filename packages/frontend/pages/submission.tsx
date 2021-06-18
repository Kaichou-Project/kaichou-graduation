import React from 'react'
import FormMessage from '../components/FormMessage'
import FormTabs from '../components/FormTabs'
import Footer from '../components/Footer'
import styles from '../styles/Form.module.scss'

export default function Submission() {
  return (
    <>
      <FormTabs />
      <FormMessage />
      <Footer />
    </>
  )
}

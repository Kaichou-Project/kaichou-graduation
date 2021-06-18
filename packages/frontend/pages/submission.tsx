import React, { useState } from 'react'
import FormMessage from '../components/Forms/FormMessage'
import FormFanart from '../components/Forms/FormFanart'
import FormVideo from '../components/Forms/FormVideo'
import FormTabs from '../components/Forms/FormTabs'
import Footer from '../components/Footer'
import styles from '../styles/Form.module.scss'

export default function Submission() {
  const [currentTab, setCurrentTab] = useState('message')

  return (
    <>
      {/*ToDo remove when background is changed to dark color*/}
      {/*Temporary background*/}
      <div
        style={{
          background: '#202020',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          zIndex: -100,
        }}
      />
      <FormTabs onChange={(tab) => setCurrentTab(tab)} />
      <FormMessage hidden={currentTab !== 'message'} />
      <FormFanart hidden={currentTab !== 'fanart'} />
      <FormVideo hidden={currentTab !== 'video'} />
      <Footer />
    </>
  )
}

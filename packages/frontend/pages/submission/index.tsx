import React, { useState } from 'react'
import FormMessage from '../../components/Forms/FormMessage'
import FormFanart from '../../components/Forms/FormFanart'
import FormVideo from '../../components/Forms/FormVideo'
import FormTabs from '../../components/Forms/FormTabs'
import Footer from '../../components/Footer/Footer'

export default function Submission() {
  const [currentTab, setCurrentTab] = useState('message')

  return (
    <>
      <FormTabs onChange={(tab) => setCurrentTab(tab)} />
      <FormMessage hidden={currentTab !== 'message'} />
      <FormFanart hidden={currentTab !== 'fanart'} />
      <FormVideo hidden={currentTab !== 'video'} />
      <Footer />
    </>
  )
}

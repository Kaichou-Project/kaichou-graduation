import React, { useState } from 'react'
import Navigation, { Page, Mode } from '../../components/Navigation/Navigation'
import FormMessage from '../../components/Forms/FormMessage'
import FormFanart from '../../components/Forms/FormFanart'
import FormClip from '../../components/Forms/FormClip'
import tabsEnum from '../../components/Forms/tabsEnum'
import FormTabs from '../../components/Forms/FormTabs'
import Footer from '../../components/Footer/Footer'
import SuccessPopup from '../../components/Forms/SucessPopup'

export default function Submission() {
  const [currentTab, setCurrentTab] = useState(tabsEnum.MESSAGE)
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      {submitted && <SuccessPopup form={currentTab.toString()} />}
      <Navigation
        title="Submit a message"
        page={Page.MESSAGES}
        mode={Mode.FORM}
      />
      <FormTabs onChange={(tab) => setCurrentTab(tab)} />
      <FormMessage
        hidden={currentTab !== tabsEnum.MESSAGE}
        onSuccess={() => setSubmitted(true)}
      />
      <FormFanart
        hidden={currentTab !== tabsEnum.FANART}
        onSuccess={() => setSubmitted(true)}
      />
      <FormClip
        hidden={currentTab !== tabsEnum.CLIP}
        onSuccess={() => setSubmitted(true)}
      />
      <Footer />
    </>
  )
}

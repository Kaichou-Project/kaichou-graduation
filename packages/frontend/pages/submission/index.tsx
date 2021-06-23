import React, { useState } from 'react'
import Navigation, { Page, Mode } from '../../components/Navigation/Navigation'
import FormMessage from '../../components/Forms/FormMessage'
import FormFanart from '../../components/Forms/FormFanart'
import FormClip from '../../components/Forms/FormClip'
import tabsEnum from '../../components/Forms/tabsEnum'
import FormTabs from '../../components/Forms/FormTabs'
import Captcha from '../../components/Forms/Captcha'
import Footer from '../../components/Footer/Footer'

export default function Submission() {
  const [currentTab, setCurrentTab] = useState(tabsEnum.MESSAGE)
  const [captchaToken, setCaptchaToken] = useState('')

  return (
    <>
      <Captcha onVerify={setCaptchaToken} />
      <Navigation
        title="Submit a message"
        page={Page.MESSAGES}
        mode={Mode.FORM}
      />
      <FormTabs onChange={(tab) => setCurrentTab(tab)} />
      <FormMessage
        hidden={currentTab !== tabsEnum.MESSAGE}
        captchaToken={captchaToken}
      />
      <FormFanart
        hidden={currentTab !== tabsEnum.FANART}
        captchaToken={captchaToken}
      />
      <FormClip
        hidden={currentTab !== tabsEnum.CLIP}
        captchaToken={captchaToken}
      />
      <Footer />
    </>
  )
}

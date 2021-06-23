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

  // Used to get Token Captcha, increment tokenCounter to get new token
  const [tokenCounter, setTokenCounter] = useState(0)

  return (
    <>
      <Captcha onVerify={setCaptchaToken} getToken={tokenCounter} />
      <Navigation
        title="Submit a message"
        page={Page.MESSAGES}
        mode={Mode.FORM}
      />
      <FormTabs onChange={(tab) => setCurrentTab(tab)} />
      <FormMessage
        hidden={currentTab !== tabsEnum.MESSAGE}
        captchaToken={captchaToken}
        onSubmit={() => setTokenCounter(tokenCounter + 1)}
      />
      <FormFanart
        hidden={currentTab !== tabsEnum.FANART}
        captchaToken={captchaToken}
        onSubmit={() => setTokenCounter(tokenCounter + 1)}
      />
      <FormClip
        hidden={currentTab !== tabsEnum.CLIP}
        captchaToken={captchaToken}
        onSubmit={() => setTokenCounter(tokenCounter + 1)}
      />
      <Footer />
    </>
  )
}

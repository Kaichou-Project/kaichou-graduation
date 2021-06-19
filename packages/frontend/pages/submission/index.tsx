import React, { useState } from 'react'
import FormMessage from '../../components/Forms/FormMessage'
import FormFanart from '../../components/Forms/FormFanart'
import FormClip from '../../components/Forms/FormClip'
import tabsEnum from '../../components/Forms/tabsEnum'
import FormTabs from '../../components/Forms/FormTabs'
import Footer from '../../components/Footer/Footer'

export default function Submission() {
  const [currentTab, setCurrentTab] = useState(tabsEnum.MESSAGE)

  return (
    <>
      <FormTabs onChange={(tab) => setCurrentTab(tab)} />
      <FormMessage hidden={currentTab !== tabsEnum.MESSAGE} />
      <FormFanart hidden={currentTab !== tabsEnum.FANART} />
      <FormClip hidden={currentTab !== tabsEnum.CLIP} />
      <Footer />
    </>
  )
}

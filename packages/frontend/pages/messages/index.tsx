import React from 'react'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

export default function Messages() {
  return (
    <>
      <Navigation title="Messages" page={Page.MESSAGES} />
      <Footer />
    </>
  )
}

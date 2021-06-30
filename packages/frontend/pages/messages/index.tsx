import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import ToTheTopButton from '../../components/ToTheTopButton'
import MessageBoard from '../../components/MessageCards/MessageList'

export default function Messages() {
  return (
    <>
      <Navigation title="Messages" page={Page.MESSAGES} />
      <MessageBoard />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

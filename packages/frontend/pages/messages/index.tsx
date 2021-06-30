import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import ToTheTopButton from '../../components/ToTheTopButton'
import MessageList from '../../components/MessageCards/MessageList'

export default function MessageBoard() {
  return (
    <>
      <Navigation title="Messages" page={Page.MESSAGES} />
      <MessageList />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import ToTheTopButton from '../../components/ToTheTopButton'
import MessageBoard from '../../components/MessageCards/MessageBoard'
import Header from '../../components/Header/Header'

export default function Messages() {
  return (
    <>
      <Navigation title="Messages" page={Page.MESSAGES} />
      <Header>Messages from the community</Header>
      <MessageBoard />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

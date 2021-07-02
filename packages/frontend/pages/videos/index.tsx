import React from 'react'
import ToTheTopButton from '../../components/ToTheTopButton'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import VideoBoard from '../../components/Video/VideoBoard'
import Header from '../../components/Header/Header'

export default function Videos() {
  return (
    <>
      <Navigation title="Clips & Videos" page={Page.VIDEOS} />
      <Header>Videos from the community</Header>
      <VideoBoard />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

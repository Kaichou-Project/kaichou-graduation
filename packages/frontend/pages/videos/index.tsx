import React from 'react'
import ToTheTopButton from '../../components/ToTheTopButton'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import VideoBoard from '../../components/Video/VideoBoard'

export default function Videos() {
  return (
    <>
      <Navigation title="Clips & Videos" page={Page.VIDEOS} />
      <VideoBoard />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

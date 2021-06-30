import React from 'react'
import ToTheTopButton from '../../components/ToTheTopButton'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import VideoBoard from '../../components/Video/VideoBoard'

export default function Clips() {
  return (
    <>
      <Navigation title="Clips & Videos" page={Page.CLIPS} />
      <VideoBoard />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

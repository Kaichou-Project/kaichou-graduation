import React from 'react'
import ToTheTopButton from '../components/ToTheTopButton'
import Navigation, { Page } from '../components/Navigation/Navigation'
import VideoCarousel from '../components/Video/VideoCarousel'
import HomeBoard from '../components/HomeBoard'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navigation title="Graduation of Kiryu Coco" page={Page.HOME} />
      <VideoCarousel />
      <HomeBoard />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

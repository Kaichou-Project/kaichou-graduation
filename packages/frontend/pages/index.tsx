import React from 'react'
import ToTheTopButton from '../components/ToTheTopButton'
import Navigation, { Page } from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navigation title="Graduation of Kiryu Coco" page={Page.HOME} />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

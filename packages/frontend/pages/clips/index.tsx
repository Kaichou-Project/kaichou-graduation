import React from 'react'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

export default function Clips() {
  return (
    <>
      <Navigation title="Clips & Videos" page={Page.CLIPS} />
      <Footer />
    </>
  )
}

import React from 'react'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

export default function Fanart() {
  return (
    <>
      <Navigation title="Fanart" page={Page.FANART} />
      <Footer />
    </>
  )
}

import React from 'react'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import FanartBoard from '../../components/Fanart/FanartBoard'
import Footer from '../../components/Footer/Footer'

export default function Fanart() {
  return (
    <>
      <Navigation title="Fanart" page={Page.FANART} />
      <FanartBoard />
      <Footer />
    </>
  )
}

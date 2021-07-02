import React from 'react'
import ToTheTopButton from '../../components/ToTheTopButton'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import FanartBoard from '../../components/Fanart/FanartBoard'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

export default function Fanart() {
  return (
    <>
      <Navigation title="Fanart" page={Page.FANART} />
      <Header>Fanart from the Community</Header>
      <FanartBoard />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

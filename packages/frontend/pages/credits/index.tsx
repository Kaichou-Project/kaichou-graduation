import React from 'react'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

export default function Credits() {
  return (
    <>
      <Navigation title="Credits" page={Page.CREDITS} />
      <Footer />
    </>
  )
}

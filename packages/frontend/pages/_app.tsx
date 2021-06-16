//React imports
import React from 'react'

//Project imports
import SakuraParticles from '../components/SakuraParticles'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <SakuraParticles />
    <Component {...pageProps} />
  </>
}

export default MyApp

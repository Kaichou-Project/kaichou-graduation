//React Import
import React from 'react'
import ToTheTopButton from '../components/ToTheTopButton'

//Project imports
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Home = () => (
  <>
    <Navigation title="Graduation of Kiryu Coco" page="Home" />
    <div>Home</div>
    <ToTheTopButton />
    <Footer />
  </>
)

export default Home

import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

function VideoCard() {
  return (
    <img style={{ width: 'calc(100% - 10px)' }} src="/temp-video-img.png" />
  )
}

export default function VideoCarousel() {
  return (
    <Carousel responsive={responsive} centerMode infinite>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </Carousel>
  )
}

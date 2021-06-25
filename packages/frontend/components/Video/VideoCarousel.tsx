import React, { useState } from 'react'
import { VideoInterface } from './Video'
import VideoPlayer from './VideoPlayer'
import styles from './videoBoard.module.scss'
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

export default function VideoCarousel() {
  const [videos] = useState<VideoInterface[]>([
    {
      id: '0',
      creator: 'CocoBestDragon',
      title: 'Kiara lol',
      url: 'https://www.youtube.com/watch?v=RR4m1HVbkBU',
    },
    {
      id: '1',
      creator: 'CocoBestDragon',
      title: 'Blessed Doggo',
      url: 'https://www.youtube.com/watch?v=RoSs9-NDP3E',
    },
  ])

  return (
    <span className={styles.carousel}>
      <Carousel responsive={responsive} centerMode infinite>
        {videos.map((video) => (
          <VideoPlayer key={video.id} video={video} />
        ))}
      </Carousel>
    </span>
  )
}

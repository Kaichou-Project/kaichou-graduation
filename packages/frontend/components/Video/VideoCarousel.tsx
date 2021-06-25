import React, { useState, useEffect } from 'react'
import { VideoInterface } from './Video'
import VideoPlayer from './VideoPlayer'
import styles from './videoBoard.module.scss'
import Carousel from 'react-multi-carousel'
import { getVideo } from '../../api/temp-video'
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
  const [videos, setVideos] = useState<VideoInterface[]>(null)

  useEffect(() => {
    async function onStart() {
      const videos = await getVideo()
      setVideos(videos)
    }
    onStart()
  })

  return (
    <span className={styles.carousel}>
      {videos && (
        <Carousel responsive={responsive} centerMode infinite>
          {videos.map((video) => (
            <VideoPlayer key={video.id} video={video} />
          ))}
        </Carousel>
      )}
    </span>
  )
}

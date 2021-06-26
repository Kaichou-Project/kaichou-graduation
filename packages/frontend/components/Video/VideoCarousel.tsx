import React, { useState, useEffect } from 'react'
import { VideoInterface } from '../../interfaces/video'
import VideoPlayer from './VideoPlayer'
import styles from './videoBoard.module.scss'
import Carousel from 'react-multi-carousel'
import { getVideo } from '../../api/video'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
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
  }, [])

  return (
    <span className={styles.carousel}>
      {videos && (
        <Carousel responsive={responsive} centerMode infinite>
          {videos.map((video, i) => (
            <VideoPlayer key={i} video={video} />
          ))}
        </Carousel>
      )}
    </span>
  )
}

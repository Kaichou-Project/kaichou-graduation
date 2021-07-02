import React, { useState, useEffect } from 'react'
import { VideoInterface } from '../../interfaces/video'
import VideoPlayer from './VideoPlayer'
import styles from './videoBoard.module.scss'
import Carousel from 'react-multi-carousel'
import { getVideo } from '../../api/video'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 10000, min: 0 },
    items: 1,
  },
}

const CENTER_MODE_BREAKPOINT = 860
function getCenterMode(): boolean {
  if (!process.browser) return true
  return window.innerWidth > CENTER_MODE_BREAKPOINT
}

export default function VideoCarousel() {
  const [videos, setVideos] = useState<VideoInterface[]>(null)
  const [isCenterMode, setIsCenterMode] = useState(getCenterMode())

  useEffect(() => {
    async function onStart() {
      try {
        const videos = await getVideo()
        setVideos(videos)
      } catch (error) {
        // if there is error when fetching data
        // supply with empty array to mitigate unhandled runtime error
        // TODO: prepare a more proper way of handling this kind or error
        setVideos(null)
      }
    }
    onStart()

    const onResize = () => setIsCenterMode(getCenterMode())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <span className={styles.carousel}>
      {videos && (
        <Carousel responsive={responsive} infinite centerMode={isCenterMode}>
          {videos.map((video, i) => (
            <VideoPlayer key={i} video={video} />
          ))}
        </Carousel>
      )}
    </span>
  )
}

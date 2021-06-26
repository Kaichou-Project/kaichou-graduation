import React, { useState, useEffect } from 'react'
import { VideoInterface } from '../../interfaces/video'
import Video from './Video'
import { getVideo } from '../../api/video'
import styles from './videoBoard.module.scss'

export default function VideoBoard() {
  const [videos, setVideos] = useState<VideoInterface[]>(null)

  useEffect(() => {
    async function onStart() {
      const videos = await getVideo()
      setVideos(videos)
    }
    onStart()
  }, [])

  return (
    <>
      <div className={styles.listContainer}>
        {videos && videos.map((video, i) => <Video key={i} video={video} />)}
      </div>
    </>
  )
}

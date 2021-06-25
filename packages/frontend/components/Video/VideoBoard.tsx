import React, { useState, useEffect } from 'react'
import Video, { VideoInterface } from './Video'
import { getVideo } from '../../api/temp-video'
import styles from './videoBoard.module.scss'

export default function VideoBoard() {
  const [videos, setVideos] = useState<VideoInterface[]>(null)

  useEffect(() => {
    async function onStart() {
      const videos = await getVideo()
      setVideos(videos)
    }
    onStart()
  })

  return (
    <>
      <div className={styles.listContainer}>
        {videos &&
          videos.map((video) => <Video key={video.id} video={video} />)}
      </div>
    </>
  )
}

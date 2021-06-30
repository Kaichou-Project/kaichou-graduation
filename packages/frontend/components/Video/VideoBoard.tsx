import React, { useState } from 'react'
import { VideoResponseInterface } from '../../interfaces/video'
import Video from './Video'
import { getVideo } from '../../api/video'
import InfiniteScrolling from '../InfiniteScrolling'
import styles from './videoBoard.module.scss'

export default function VideoBoard() {
  const [videos, setVideos] = useState<VideoResponseInterface[]>([])

  return (
    <InfiniteScrolling
      next={getVideo}
      onData={(data) => setVideos(data as VideoResponseInterface[])}
    >
      <div className={styles.listContainer}>
        {videos.map((video, i) => (
          <Video key={i.toString()} video={video} />
        ))}
      </div>
    </InfiniteScrolling>
  )
}

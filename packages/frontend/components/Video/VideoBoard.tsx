import React, { useState } from 'react'
import { VideoResponseInterface } from '../../interfaces/video'
import Video from './Video'
import { getVideo } from '../../api/video'
import InfiniteScrolling from '../InfiniteScrolling'
import styles from './videoBoard.module.scss'
import Link from 'next/link'

export default function VideoBoard() {
  const [videos, setVideos] = useState<VideoResponseInterface[]>([])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Videos from the Community</h2>
        <Link href="/submission">
          <div className={styles.button}>Submit your own</div>
        </Link>
      </div>
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
    </div>
  )
}

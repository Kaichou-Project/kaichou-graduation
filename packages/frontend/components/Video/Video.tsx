import React from 'react'
import VideoPlayer from './VideoPlayer'
import { VideoInterface, VideoResponseInterface } from '../../interfaces/video'
import styles from './videoBoard.module.scss'

interface VideoProps {
  video: VideoInterface | VideoResponseInterface
}

export default function Video({ video }: VideoProps) {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.descriptor}>
          <p className={styles.title}>{video.title}</p>
          <p className={styles.creator}> - {video.creator}</p>
        </div>
        <VideoPlayer video={video} />
      </div>
    </div>
  )
}

import React from 'react'
import ReactPlayer from 'react-player'
import { VideoInterface } from '../../interfaces/video'
import styles from './videoBoard.module.scss'

interface VideoProps {
  video: VideoInterface
}

export default function VideoPlayer({ video }: VideoProps) {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        id={styles.player}
        url={video.videoEmbedUrl}
        width={null}
        height={null}
      />
    </div>
  )
}

import React from 'react'
import ReactPlayer from 'react-player'
import { VideoInterface } from './Video'
import styles from './videoBoard.module.scss'

interface VideoProps {
  video: VideoInterface
}

export default function VideoPlayer({ video }: VideoProps) {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        id={styles.player}
        url={video.url}
        width={null}
        height={null}
      />
    </div>
  )
}

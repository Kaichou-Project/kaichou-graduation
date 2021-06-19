import React from 'react'
import ReactPlayer from 'react-player'
import styles from './videoBoard.module.scss'

export interface VideoInterface {
  id: string
  title: string
  creator: string
  url: string
}

interface VideoProps {
  key: string
  video: VideoInterface
}

export default function Video({ video }: VideoProps) {
  return (
    <div>
      <p className={styles.title}>{video.title}</p>
      <p className={styles.creator}> - {video.creator}</p>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.player}
          url={video.url}
          width={'100%'}
          height={'100%'}
        />
      </div>
    </div>
  )
}

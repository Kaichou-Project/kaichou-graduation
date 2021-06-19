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
      <p className={styles.cardInfo}>{video.title}</p>
      <p className={styles.cardInfo}> - {video.creator}</p>
      <div className={styles.playerWrapper}>
        <ReactPlayer className={styles.player} url={video.url} />
      </div>
    </div>
  )
}

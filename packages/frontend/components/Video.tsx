import React from 'react'
import ReactPlayer from 'react-player'
import styles from '../styles/videoBoard.module.scss'

interface Video {
  title: string
  creator: string
  url: string
}

export default function Video({ video }) {
  return (
    <div>
      <h3 className={styles.cardInfo}>{video.title}</h3>
      <h4 className={styles.cardInfo}> - {video.creator}</h4>
      <div className={styles.playerWrapper}>
        <ReactPlayer className={styles.player} url={video.url} />
      </div>
    </div>
  )
}

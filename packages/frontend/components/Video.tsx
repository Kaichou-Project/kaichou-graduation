import React from 'react'
import ReactPlayer from 'react-player'
import styles from '../styles/videoBoard.module.scss'

export default function Video({ video }) {
  return (
    <div>
      <h3 className={styles.text}>
        {video.title} - {video.creator}
      </h3>
      <ReactPlayer className={styles.player} url={video.url} />
    </div>
  )
}

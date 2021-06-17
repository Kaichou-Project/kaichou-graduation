import React from 'react'
import ReactPlayer from 'react-player'
import styles from '../styles/videoBoard.module.scss'

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

export default function Video(props: VideoProps) {
  return (
    <div>
      <h3 className={styles.cardInfo}>{props.video.title}</h3>
      <h4 className={styles.cardInfo}> - {props.video.creator}</h4>
      <div className={styles.playerWrapper}>
        <ReactPlayer className={styles.player} url={props.video.url} />
      </div>
    </div>
  )
}

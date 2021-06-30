import React, { useState } from 'react'
import Video, { VideoInterface } from './Video'
import styles from './videoBoard.module.scss'
import Link from 'next/link'

export default function VideoBoard() {
  const [videos] = useState<VideoInterface[]>([
    {
      id: '0',
      creator: 'CocoBestDragon',
      title: 'Kiara lol',
      url: 'https://www.youtube.com/watch?v=RR4m1HVbkBU',
    },
    {
      id: '1',
      creator: 'CocoBestDragon',
      title: 'Blessed Doggo',
      url: 'https://www.youtube.com/watch?v=RoSs9-NDP3E',
    },
  ])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Videos from the Community</h2>
        <Link href="/submission">
          <div className={styles.button}>Submit your own</div>
        </Link>
      </div>
      <div className={styles.listContainer}>
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import Video, { VideoInterface } from './Video'
import styles from './videoBoard.module.scss'

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
    <>
      <div className={styles.listContainer}>
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </>
  )
}

import React from 'react'
import styles from './styles.module.scss'
import Masonry from 'react-masonry-css'
import Link from 'next/link'

const breakpointColumnsObj = {
  default: 3,
  860: 2,
  425: 1,
}

function Card({ url }) {
  return <img style={{ width: '100%' }} src={url} />
}

export default function HomeBoard() {
  const items = [
    '/temp-message-img.png',
    '/temp-fanart-img.png',
    '/temp-message-img.png',
    '/temp-message-img.png',
    '/temp-message-img.png',
    '/temp-message-img.png',
  ]
  return (
    <div className={styles.container}>
      <h2>Messages from the Community</h2>
      <Link href="/submission">
        <div className={styles.button}>Submit your own</div>
      </Link>
      {items && (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.masonry_grid}
          columnClassName={styles.masonry_grid_col}
        >
          {items.map((url, i) => (
            <Card key={i} url={url} />
          ))}
        </Masonry>
      )}
    </div>
  )
}

import React from 'react'
import styles from './styles.module.scss'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 3,
  860: 2,
  425: 1,
}

export default function MasonryBoard({ children }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonry_grid}
      columnClassName={styles.masonry_grid_col}
    >
      {children}
    </Masonry>
  )
}

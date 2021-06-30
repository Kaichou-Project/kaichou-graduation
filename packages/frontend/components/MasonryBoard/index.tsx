import React from 'react'
import styles from './styles.module.scss'
import Masonry from 'react-masonry-css'

interface props {
  breakpointCols?: any
  children: any
}

const defaultBreakpointColumns = {
  default: 3,
  860: 2,
  425: 1,
}

export default function MasonryBoard({ breakpointCols, children }: props) {
  return (
    <Masonry
      breakpointCols={breakpointCols || defaultBreakpointColumns}
      className={styles.masonry_grid}
      columnClassName={styles.masonry_grid_col}
    >
      {children}
    </Masonry>
  )
}

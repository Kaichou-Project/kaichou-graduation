import React from 'react'
import styles from './styles.module.scss'
import Masonry from 'react-masonry-css'

export default function MasonryBoard({ children, columnsizing }) {
  return (
    <Masonry
      breakpointCols={columnsizing}
      className={styles.masonry_grid}
      columnClassName={styles.masonry_grid_col}
    >
      {children}
    </Masonry>
  )
}

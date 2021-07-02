import styles from './styles.module.scss'
import Link from 'next/link'
import React from 'react'

export default function Header({ children }) {
  return (
    <div className={styles.container}>
      <h2>{children}</h2>
      <Link href="/submission">
        <div className={styles.button}>Submit your own!</div>
      </Link>
    </div>
  )
}

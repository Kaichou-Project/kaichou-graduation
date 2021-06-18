import React from 'react'
import styles from '../styles/MessageCard.module.scss'
import cardInfo from '../interfaces/cardInfo'

export default function MessageCard(props: cardInfo) {
  const { title, message, author } = props
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title} </div>
      <div className={styles.message}>{message} </div>
      <div className={styles.author}>{author} </div>
    </div>
  )
}

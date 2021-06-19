import React from 'react'
import styles from '../styles/MessageCard.module.scss'
import cardInfo from '../interfaces/cardInfo'

export default function MessageCard(props: cardInfo) {
  const { title, message, author } = props
  const image = '/message-card-elements/Vector3.svg'
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>{title} </div>
        <img className={styles.img} src={image} />
        <div className={styles.message}>{message} </div>
        <div className={styles.author}>{author} </div>
      </div>
    </div>
  )
}

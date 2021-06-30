import React from 'react'
import styles from './MessageCard.module.scss'
import cardInfo from '../../interfaces/cardInfo'

export default function MessageCard(props: cardInfo) {
  // This changes the image on the top right of the card
  const image = '/message-card-elements/cardimage.svg'
  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.title} </div>
      <img className={styles.img} src={image} />
      <div className={styles.message}>{props.message} </div>
      <div className={styles.author}>{props.author} </div>
    </div>
  )
}

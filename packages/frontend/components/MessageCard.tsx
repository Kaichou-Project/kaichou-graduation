import React from 'react'
import styles from '../styles/MessageCard.module.scss'
import MessageProps from '../interfaces/messageProps'

export default function MessageCard(props: MessageProps) {
  // This changes the image on the top right of the card
  const image = '/message-card-elements/cardimage.svg'
  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.cardData.title} </div>
      <img className={styles.img} src={image} />
      <div className={styles.message}>{props.cardData.message} </div>
      <div className={styles.author}>{props.cardData.author} </div>
    </div>
  )
}

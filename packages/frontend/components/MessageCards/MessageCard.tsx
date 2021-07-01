import React from 'react'
import styles from './MessageCard.module.scss'
import { MessageInterface } from '../../interfaces/message'

export default function MessageCard(props: MessageInterface) {
  // This changes the image on the top right of the card
  const image = '/message-card-elements/cardimage.svg'
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} />
      <div className={styles.message}>{props.content} </div>
      <div className={styles.author}>{props.creator} </div>
    </div>
  )
}

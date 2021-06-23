import React from 'react'
import MessageCard from './MessageCard'
import MessageProps from '../../interfaces/messageProps'
import styles from './MessageCard.module.scss'

export default function MessageList(props: MessageProps) {
  const cards = props.cardData.map((message, i) => (
    <MessageCard key={i} {...message} />
  ))
  return (
    <div className={styles.container}>
      <div className={styles.grid}>{cards}</div>
    </div>
  )
}

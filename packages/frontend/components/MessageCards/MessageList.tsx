import React from 'react'
import MessageCard from './MessageCard'
import MessageProps from '../../interfaces/messageProps'
import styles from './MessageCard.module.scss'
import StackGrid from 'react-stack-grid'

export default function MessageList(props: MessageProps) {
  const cards = props.cardData.map((message, i) => (
    <MessageCard key={i} {...message} />
  ))
  return (
    <div className={styles.container}>
      <StackGrid columnWidth={500} gutterWidth={30} gutterHeight={30}>
        {cards}
      </StackGrid>
    </div>
  )
}

import React from 'react'
import MessageCard from './MessageCard'
import MessageProps from '../../interfaces/messageProps'
import styles from '../Fanart/styles.module.scss'
import MasonryBoard from '../MasonryBoard'

export default function MessageList(props: MessageProps) {
  const cards = props.cardData.map((message, i) => (
    <MessageCard key={i} {...message} />
  ))
  return (
    <div className={styles.fanart_board}>
      <MasonryBoard> {cards}</MasonryBoard>
    </div>
  )
}

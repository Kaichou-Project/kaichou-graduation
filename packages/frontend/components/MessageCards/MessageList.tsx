import React from 'react'
import MessageCard from './MessageCard'
import MessageProps from '../../interfaces/messageProps'
import styles from '../Fanart/styles.module.scss'
import MasonryBoard from '../MasonryBoard'

const breakpointColumnsObj = {
  default: 3,
  1160: 2,
  860: 1,
}

export default function MessageList(props: MessageProps) {
  const cards = props.cardData.map((message, i) => (
    <MessageCard key={i} {...message} />
  ))
  return (
    <div className={styles.fanart_board}>
      <MasonryBoard columnsizing={breakpointColumnsObj}>{cards}</MasonryBoard>
    </div>
  )
}

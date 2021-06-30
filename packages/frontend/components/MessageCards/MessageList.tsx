import React, { useState, useEffect } from 'react'
import MessageCard from './MessageCard'
import { MessageInterface } from '../../interfaces/message'
import { getMessage } from '../../api/message'
import styles from '../Fanart/styles.module.scss'
import MasonryBoard from '../MasonryBoard'

const breakpointColumnsObj = {
  default: 3,
  1160: 2,
  860: 1,
}

export default function MessageList() {
  const [messages, setMessages] = useState<MessageInterface[]>()

  useEffect(() => {
    async function onStart() {
      const fanarts = await getMessage()
      setMessages(fanarts)
    }

    onStart()
  }, [])

  return (
    <div className={styles.fanart_board}>
      <MasonryBoard breakpointCols={breakpointColumnsObj}>
        {messages &&
          messages.map((message, i) => <MessageCard key={i} {...message} />)}
      </MasonryBoard>
    </div>
  )
}

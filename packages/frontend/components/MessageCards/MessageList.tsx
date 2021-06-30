import React, { useEffect, useState } from 'react'
import MessageCard from './MessageCard'
import styles from '../Fanart/styles.module.scss'
import MasonryBoard from '../MasonryBoard'
import { MessageInterface } from '../../interfaces/message'
import { getMessages } from '../../api/message'

const breakpointColumnsObj = {
  default: 3,
  1160: 2,
  860: 1,
}

export default function MessageList() {
  const [messages, setMessages] = useState<MessageInterface[]>()

  useEffect(() => {
    async function onStart() {
      const messages = await getMessages()
      setMessages(messages)
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

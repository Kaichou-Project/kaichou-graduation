import React, { useState } from 'react'
import MessageCard from './MessageCard'
import { MessageResponseInterface } from '../../interfaces/message'
import { getMessages } from '../../api/message'
import InfiniteScrolling from '../InfiniteScrolling'
import styles from '../Fanart/styles.module.scss'
import MasonryBoard from '../MasonryBoard'

const breakpointColumnsObj = {
  default: 3,
  1160: 2,
  860: 1,
}

export default function MessageBoard() {
  const [messages, setMessages] = useState<MessageResponseInterface[]>()

  return (
    <div className={styles.fanart_board}>
      <InfiniteScrolling
        next={getMessages}
        onData={(data) => setMessages(data as MessageResponseInterface[])}
      >
        <MasonryBoard breakpointCols={breakpointColumnsObj}>
          {messages &&
            messages.map((message, i) => <MessageCard key={i} {...message} />)}
        </MasonryBoard>
      </InfiniteScrolling>
    </div>
  )
}

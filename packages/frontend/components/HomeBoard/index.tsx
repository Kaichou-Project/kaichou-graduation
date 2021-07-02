import React, { useState, useEffect } from 'react'
import { getFanart } from '../../api/fanart'
import { getMessages } from '../../api/message'
import { FanartResponseInterface } from '../../interfaces/fanart'
import { MessageResponseInterface } from '../../interfaces/message'
import MessageCard from '../MessageCards/MessageCard'
import FanartCard from '../Fanart/FanartCard'
import MasonryBoard from '../MasonryBoard'
import styles from './styles.module.scss'
import Link from 'next/link'

interface itemInterface {
  type: string
  content: MessageResponseInterface | FanartResponseInterface
}

const breakpointColumnsObj = {
  default: 3,
  1160: 2,
  860: 1,
}

export default function HomeBoard() {
  const [items, setItems] = useState<itemInterface[]>(null)

  useEffect(() => {
    async function onStart() {
      try {
        const [messages, fanarts] = await Promise.all([
          getMessages(),
          getFanart(),
        ])
        const items: itemInterface[] = []

        // Random based soring
        while (messages.length || fanarts.length) {
          let type = Math.random() > 0.5 ? 'message' : 'fanart'
          if (type == 'message' && !messages.length) type = 'fanart'
          if (type == 'fanart' && !fanarts.length) type = 'message'

          const content = type == 'message' ? messages.shift() : fanarts.shift()
          items.push({ type, content })
        }

        setItems(items)
      } catch (error) {
        // if there is error when fetching data
        // supply with empty array to mitigate unhandled runtime error
        // TODO: prepare a more proper way of handling this kind or error
        setItems(null)
      }
    }

    onStart()
  }, [])

  return (
    <div className={styles.container}>
      <h2>Messages from the Community</h2>
      <Link href="/submission">
        <div className={styles.button}>Submit your own</div>
      </Link>
      <div className={styles.masonry}>
        {items && (
          <MasonryBoard breakpointCols={breakpointColumnsObj}>
            {items.map(({ type, content }, i) =>
              type === 'message' ? (
                <MessageCard
                  key={i}
                  {...(content as MessageResponseInterface)}
                />
              ) : (
                <FanartCard key={i} {...(content as FanartResponseInterface)} />
              )
            )}
          </MasonryBoard>
        )}
      </div>
    </div>
  )
}

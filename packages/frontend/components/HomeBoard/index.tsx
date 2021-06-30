import React, { useState, useEffect } from 'react'
import { getFanart } from '../../api/fanart'
import { getMessage } from '../../api/message'
import { FanartResponseInterface } from '../../interfaces/fanart'
import { MessageResponseInterface } from '../../interfaces/message'
import FanartCard from '../Fanart/FanartCard'
import MasonryBoard from '../MasonryBoard'
import styles from './styles.module.scss'
import Link from 'next/link'

function MessageCard(props: MessageResponseInterface) {
  return <img style={{ width: '100%' }} src={props.content} />
}

interface itemInterface {
  type: string
  content: MessageResponseInterface | FanartResponseInterface
}

export default function HomeBoard() {
  const [items, setItems] = useState<itemInterface[]>(null)

  useEffect(() => {
    async function onStart() {
      const [messages, fanarts] = await Promise.all([getMessage(), getFanart()])
      const items: itemInterface[] = []

      // Random based soring
      while (messages.length || fanarts.length) {
        let type = Math.random() > 0.5 ? 'message' : 'fanart'
        if (type == 'message' && !messages.length) type = 'fanart'
        if (type == 'fanart' && !fanarts.length) type = 'message'

        const content = type == 'message' ? messages.shift() : fanarts.shift()
        items.push({ type, content })
      }

      // Time based sorting
      // messages.forEach((content) => items.push({ type: 'message', content }))
      // fanarts.forEach((content) => items.push({ type: 'fanarts', content }))
      // items.sort((item1, item2) => {
      //   const date1 = new Date(item1.content.createdAt)
      //   const date2 = new Date(item2.content.createdAt)
      //   return date1 > date2 ? 1 : -1
      // })

      setItems(items)
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
          <MasonryBoard>
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

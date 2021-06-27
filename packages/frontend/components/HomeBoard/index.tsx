import React, { useState, useEffect } from 'react'
import { getFanart } from '../../api/fanart'
import { getMessage } from '../../api/message'
import { FanartInterface } from '../../interfaces/fanart'
import { MessageInterface } from '../../interfaces/message'
import FanartCard from '../Fanart/FanartCard'
import MasonryBoard from '../MasonryBoard'
import styles from './styles.module.scss'
import Link from 'next/link'

function MessageCard(props: MessageInterface) {
  return <img style={{ width: '100%' }} src={props.content} />
}

interface itemInterface {
  type: string
  content: MessageInterface | FanartInterface
}

export default function HomeBoard() {
  const [items, setItems] = useState<itemInterface[]>(null)

  useEffect(() => {
    async function onStart() {
      const [messages, fanarts] = await Promise.all([getMessage(), getFanart()])
      const items: itemInterface[] = []

      messages.forEach((content) => items.push({ type: 'message', content }))
      fanarts.forEach((content) => items.push({ type: 'fanarts', content }))

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
                <MessageCard key={i} {...(content as MessageInterface)} />
              ) : (
                <FanartCard key={i} {...(content as FanartInterface)} />
              )
            )}
          </MasonryBoard>
        )}
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import FanartCard from './FanartCard'
import { FanartResponseInterface } from '../../interfaces/fanart'
import { getFanart } from '../../api/fanart'
import Link from 'next/link'
import InfiniteScrolling from '../InfiniteScrolling'
import MasonryBoard from '../MasonryBoard'
import styles from './styles.module.scss'

export default function FanartBoard() {
  const [fanarts, setFanarts] = useState<FanartResponseInterface[]>([])

  return (
    <div className={styles.fanart_board}>
      <div className={styles.header}>
        <h2>Fanart from the Community</h2>
        <Link href="/submission">
          <div className={styles.button}>Submit your own</div>
        </Link>
      </div>
      <h2>Click on the images to enlarge them!</h2>
      <MasonryBoard>
        {fanarts &&
          fanarts.map((fanart, i) => <FanartCard key={i} {...fanart} />)}
      </MasonryBoard>
      <InfiniteScrolling
        next={getFanart}
        onData={(data) => setFanarts(data as FanartResponseInterface[])}
      >
        <MasonryBoard>
          {fanarts.map((fanart, i) => (
            <FanartCard key={i} {...fanart} />
          ))}
        </MasonryBoard>
      </InfiniteScrolling>
    </div>
  )
}

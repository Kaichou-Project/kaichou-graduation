import React, { useState, useEffect } from 'react'
import FanartCard from './FanartCard'
import { FanartInterface } from '../../interfaces/fanart'
import { getFanart } from '../../api/fanart'
import Link from 'next/link'
import MasonryBoard from '../MasonryBoard'
import styles from './styles.module.scss'


export default function FanartBoard() {
  const [fanarts, setFanarts] = useState<FanartInterface[]>()

  useEffect(() => {
    async function onStart() {
      const fanarts = await getFanart()
      setFanarts(fanarts)
    }

    onStart()
  }, [])
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
    </div>
  )
}

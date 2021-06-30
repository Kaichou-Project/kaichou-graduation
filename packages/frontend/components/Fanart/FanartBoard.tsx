import React, { useState, useEffect } from 'react'
import FanartCard from './FanartCard'
import { FanartInterface } from '../../interfaces/fanart'
import { getFanart } from '../../api/fanart'
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
      <h2>Click on the images to enlarge them!</h2>
      <MasonryBoard>
        {fanarts &&
          fanarts.map((fanart, i) => <FanartCard key={i} {...fanart} />)}
      </MasonryBoard>
    </div>
  )
}

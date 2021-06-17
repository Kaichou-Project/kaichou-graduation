import React from 'react'
import SoundCardList from '../components/SoundCardList'
import { soundList } from '../components/soundList'

export default function SoundBoard() {
  return (
    <>
      <h2>
        Coco Sound Board
        <br />
        -- Pending for header--{' '}
      </h2>
      <SoundCardList list={soundList} />
    </>
  )
}

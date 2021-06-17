import React from 'react'
import SoundCardList from '../components/SoundCardList'

const soundList = {
  'good-morning': {
    title: 'Good morning mother fxcker',
    url: '/sounds/coco-good-morning-mother-fxcker.mp3',
  },
  'next-meme': {
    title: 'Next meme',
    url: '/sounds/next-meme.mp3',
  },
  'ara-ara': {
    title: 'Ara ara',
    url: '/sounds/kiryu-coco-ara-ara-motherfucker.mp3',
  },
  'bye-bye': {
    title: 'Bye bye you misreable',
    url: '/sounds/kiryu-coco-bye-bye-you-misreable-son-of-a-bitch.mp3',
  },
  'feet-compilation': {
    title: 'Feet compilation',
    url: '/sounds/kiryu-coco-feet-compilation.mp3',
  },
  'my-sanity': {
    title: 'My sanity',
    url: '/sounds/kiryu-coco-my-sanity.mp3',
  },
  'oh-wow': {
    title: 'Oh wow',
    url: '/sounds/kiryu-coco-oh-wow.mp3',
  },
  'okite-okite': {
    title: 'Okite okite okitekudasai',
    url: '/sounds/kiryu-coco-okite-okite-okite-okite-okitekudasai-ne.mp3',
  },
  'row-row': {
    title: 'Row row row your boat',
    url: '/sounds/kiryu-coco-row-row-row-your-boat.mp3',
  },
  'shut-up': {
    title: 'Shut up u son of a',
    url: '/sounds/coco_shut_up_son_of_a.mp3',
  },
}

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

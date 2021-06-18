import React from 'react'
import SoundCardList from '../components/SoundBoard/SoundCardList'
import soundCategory from '../interfaces/soundCategory'
import ToTheTopButton from '../components/ToTheTopButton'
import Footer from '../components/Footer/Footer'

const soundCategoryList: soundCategory[] = [
  {
    name: 'Category 1',
    list: [
      {
        title: 'Good morning mother fxcker',
        url: '/sounds/coco-good-morning-mother-fxcker.mp3',
      },
      {
        title: 'Next meme',
        url: '/sounds/next-meme.mp3',
      },
      {
        title: 'Ara ara',
        url: '/sounds/kiryu-coco-ara-ara-motherfucker.mp3',
      },
      {
        title: 'Bye bye you misreable',
        url: '/sounds/kiryu-coco-bye-bye-you-misreable-son-of-a-bitch.mp3',
      },
      {
        title: 'Feet compilation',
        url: '/sounds/kiryu-coco-feet-compilation.mp3',
      },
      {
        title: 'My sanity',
        url: '/sounds/kiryu-coco-my-sanity.mp3',
      },
    ],
  },
  {
    name: 'Category 2',
    list: [
      {
        title: 'Oh wow',
        url: '/sounds/kiryu-coco-oh-wow.mp3',
      },
      {
        title: 'Okite okite okitekudasai',
        url: '/sounds/kiryu-coco-okite-okite-okite-okite-okitekudasai-ne.mp3',
      },
      {
        title: 'Row row row your boat',
        url: '/sounds/kiryu-coco-row-row-row-your-boat.mp3',
      },
      {
        title: 'Shut up u son of a',
        url: '/sounds/coco_shut_up_son_of_a.mp3',
      },
    ],
  },
]

export default function SoundBoard() {
  return (
    <>
      {/*TODO remove this when header done*/}
      <h1 style={{ color: 'white' }}>
        Coco Sound Board
        <br />
        -- Pending for header--{' '}
      </h1>
      {soundCategoryList.map((soundCategory, i) => (
        <SoundCardList key={i} {...soundCategory} />
      ))}
      <ToTheTopButton />
      <Footer />
    </>
  )
}

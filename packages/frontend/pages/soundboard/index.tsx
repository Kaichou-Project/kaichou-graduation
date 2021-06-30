import React from 'react'
import SoundCardList from '../../components/SoundBoard/SoundCardList'
import soundCategory from '../../interfaces/soundCategory'
import Footer from '../../components/Footer/Footer'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import ToTheTopButton from '../../components/ToTheTopButton'

const soundCategoryList: soundCategory[] = [
  {
    name: 'Sounds',
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
      <Navigation title="Soundboard" page={Page.SOUNDBOARD} />
      {soundCategoryList.map((soundCategory, i) => (
        <SoundCardList key={i} {...soundCategory} />
      ))}
      <ToTheTopButton />
      <Footer />
    </>
  )
}

import React from 'react'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import styles from './index.module.scss'

export default function Credits() {
  const head_devs = ['RedMaps', 'Nyxordinal', 'Azuraga Melody', 'PS-Soundwave']
  const developers = [
    'FomTarro (Tom "Skeletom" Farro)',
    'GlennPoh',
    'H-isaac23',
    'keijeizei',
    'MeckiMesser',
    'Reinhek',
    'Vince14Genius',
    'VeryCoolMoment',
    'yovic',
  ]
  const designers = ['RedMaps']

  return (
    <div className={styles.credits}>
      <Navigation title="Credits" page={Page.CREDITS} />
      <p className={styles.content}>
        Overall message. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industrys standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>

      <hr />

      <h2 className={styles.title}>Coco&apos;s Graduation Farewell</h2>
      <p className={styles.content}>
        All about project 1. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries
      </p>
      <h2 className={styles.title}>Operation Sleeping Dragon</h2>
      <p className={styles.content}>
        All about project 1. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries
      </p>
      <h2 className={styles.title}>Cinderella Project</h2>
      <p className={styles.content}>
        All about project 1. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries
      </p>
      <h2 className={styles.title}>Kiryukai Project</h2>
      <p className={styles.content}>
        All about project 1. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries
      </p>
      <h2 className={styles.title}>Kaichou Project</h2>
      <p className={styles.content}>
        All about project 1. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries
      </p>

      <h3 className={styles.roles}>Head Developers</h3>
      <div className={styles.members}>
        {head_devs.map((name, i) => (
          <p className={styles.member} key={i}>
            {name}
          </p>
        ))}
      </div>

      <h3 className={styles.roles}>Developers</h3>
      <div className={styles.members}>
        {developers.map((name, i) => (
          <p className={styles.member} key={i}>
            {name}
          </p>
        ))}
      </div>

      <h3 className={styles.roles}>Designers</h3>
      <div className={styles.members}>
        {designers.map((name, i) => (
          <p className={styles.member} key={i}>
            {name}
          </p>
        ))}
      </div>
      <Footer />
    </div>
  )
}

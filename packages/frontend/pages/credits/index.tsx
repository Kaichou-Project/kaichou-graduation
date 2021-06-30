import React from 'react'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import styles from './index.module.scss'

export default function Credits() {
  const builders = [
    'name1',
    'name2',
    'name1',
    'name2',
    'name1',
    'name2',
    'name1',
    'name2',
    'name1',
    'name2',
  ]

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
      <h2 className={styles.title}>Project 1</h2>
      <p className={styles.content}>
        All about project 1. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industrys standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries
      </p>
      <h3 className={styles.roles}>Head Developers</h3>
      <div className={`${styles.members} ${styles.content}`}>
        {builders.map((member, i) => (
          <p key={i}>{member}</p>
        ))}
      </div>
      <Footer />
    </div>
  )
}

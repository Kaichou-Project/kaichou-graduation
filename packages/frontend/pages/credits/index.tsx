import React from 'react'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import styles from './index.module.scss'

export default function Credits() {
  const head_devs = ['RedMap', 'Nyxordinal', 'Azuraga Melody', 'PS-Soundwave']
  const developers = [
    'MeckiMesser',
    'keijeizei',
    'yovic',
    'Reinhek',
    'FomTarro (Tom “Skeletom” Farro)',
    'GlennPoh',
    'H-isaac23',
    'Vince14Genius',
    'VeryCoolMoment',
    'Austinx88',
    'TakoLeakest ( JGQ )',
  ]
  const designers = ['RedMap']
  const special_thanks = ['Weewoo', 'Mochi', 'CHOCO VIRUS', 'Josie']

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
        Greetings from Project Cinderella Team!
        <br />
        <br /> Kaichou, thank you for being there for us. You will always remain
        in our hearts as someone who put their whole heart into making their
        fans have as much fun as possible. We will miss Asacoco News and
        Shitpost Review, but We will never forget you! Thank you for building a
        bridge between Japanese community and Kaigai-niki! We had lots of fun
        making this video for you. Made new friends, shared new experiences.
        It&apos;s all thanks to you. It was an amazing experience being a part
        of your Hololive Fan Family. Remember, You will always remain our
        24-Hour Kaichou!
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
        Dear Coco,
        <br />
        <br /> Thank you for all the smiles and laughter you&apos;ve given us
        this past year and a half. We appreciate all the effort you put in to
        innovate the world of vtubers and paving the way for HoloEN. We grateful
        for the sacrifices you made for us, and for all of the love that could
        be felt going both ways. We are truly happy to be able to say we lived
        in the era of a dragon such as you, and we await your return in 500
        years. We are not sad because our time is coming to a close, but happy
        because we had the time together.
        <br />
        <br /> Sincerely, The Kaichou Project
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

      <h3 className={styles.roles}>Special Thanks</h3>
      <div className={styles.members}>
        {special_thanks.map((name, i) => (
          <p className={styles.member} key={i}>
            {name}
          </p>
        ))}
      </div>
      <p className={styles.kiryu_coco}>Kiryu Coco</p>
      <Footer />
    </div>
  )
}

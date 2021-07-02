import React from 'react'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'
import styles from './index.module.scss'

export default function Credits() {
  const head_devs = ['RedMap', 'Nyxordinal', 'Azuraga', 'PS-Soundwave']
  const developers = [
    'Mecki-Messer',
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
  const designers = ['RedMap', 'F4b1']
  const special_thanks = ['Weewoo', 'Mochi', 'CHOCO VIRUS', 'Josie']

  return (
    <div className={styles.credits}>
      <Navigation title="Credits" page={Page.CREDITS} />
      <h2 className={styles.title}>Coco&apos;s Graduation Farewell</h2>
      <p className={styles.content}>
        Our project is revolving around the music composition in which sss song
        orchestral version where the fans contributing will sing a choir as
        well. In the middle part of the song, we have a surprise arrangement
        that will surely get Kaichou smiling, but we cannot reveal it just yet
        because it is an idiom of the arrangement concept we have. Our project
        named; Coco Graduation Farewell Project in which we are making a project
        for Kiryu Coco&apos;s graduation ceremony. Graduation is the end of
        something and somehow people mostly think of it as the sad occasion but
        truthfully that is a beginning of something. But in our case is a little
        bit different, a vtuber/idol graduation meaning we can no longer watch
        her. Somehow it is similar to death. On this occasion we want to send
        her off with the biggest smile, with no regret at all.
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
      <h2 className={styles.title}>Operation Sleeping Dragon</h2>
      <p className={styles.content}>
        A short film dedicated to Kiryu Coco. Created by the Operation Sleeping
        Dragon Discord server. It is a film aimed at telling a bitter sweet
        narrative for the whole community.
      </p>
      <h2 className={styles.title}>Kiryukai Project</h2>
      <p className={styles.content}>
        Thank you for the Memories Coco!
        会長、僕たちとコミュニティ全体のためにあなたが
        してくれたすべてのことに感謝します。僕たちはあなたを僕たちの生活の一部として迎えてくれ
        て本当に恵まれています。僕たちは永遠に感謝しています。またお会いできるのを楽しみにして
        います。ホロライブの龍は不滅です、僕は君に世界で最高のことを願っています。500年後にま
        た会いましょうね。We&apos;ll Never Forget You!
      </p>
      <h2 className={styles.title}>Kaichou Project</h2>
      <p className={styles.content}>
        Dear Coco,
        <br />
        <br /> Thank you for all the smiles and laughter you&apos;ve given us
        this past year and a half. We appreciate all the effort you put in to
        innovate the world of vtubers and paving the way for HoloEN. We&apos;re
        grateful for the sacrifices you made for us, and for all of the love
        that could be felt going both ways. We are truly happy to be able to say
        we lived in the era of a dragon such as you, and we await your return in
        500 years. We are not sad because our time is coming to a close, but
        happy because we had the time together.
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

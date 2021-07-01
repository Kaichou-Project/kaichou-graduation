import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_bg_container}>
        <div className={styles.bg}></div>
        <div className={styles.end}></div>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.main_content}>
          <div className={styles.title}>
            <h2>Kiryu Coco Graduation Project</h2>
          </div>
          <p className={styles.subtitle}>Forever Kiryu Kai</p>
          <div className={styles.links}>
            <div className={styles.column}>
              <p>Contents</p>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/fanart">
                <a>Fanart</a>
              </Link>
              <Link href="/videos">
                <a>Videos</a>
              </Link>
              <Link href="/messages">
                <a>Messages</a>
              </Link>
              <Link href="/soundboard">
                <a>Soundboard</a>
              </Link>
              <Link href="/credits">
                <a>Credits</a>
              </Link>
            </div>
            <div className={styles.column}>
              <p>Partners</p>
              <Link href="https://discord.gg/asacocouniversity">
                <a>Asa Coco University</a>
              </Link>
              <Link href="https://discord.gg/V82t5GgGEb">
                <a>Coco&apos;s Graduation Farewell</a>
              </Link>
              <Link href="https://discord.gg/g7K3FNAHs8">
                <a>Operation Sleeping Dragon</a>
              </Link>
              <Link href="https://discord.gg/WSdP5znyBv">
                <a>Cinderella Project</a>
              </Link>
              <Link href="https://discord.gg/QWRuvqjRXM">
                <a>Kiryukai Project</a>
              </Link>
            </div>
            <div className={styles.column}>
              <p>Legal</p>
              <Link href="/terms">
                <a>Terms</a>
              </Link>
              <Link href="/privacy">
                <a>Privacy</a>
              </Link>
              <Link href="/accessibility">
                <a>Accessibility</a>
              </Link>
            </div>
          </div>
          <div className={styles.socials}>
            <Link href="https://github.com/Kaichou-Project/kaichou-graduation">
              <img
                src="/social-icons/github.svg"
                alt="Github"
                width="50"
                height="50"
              />
            </Link>
            <Link href="https://twitter.com/kiryucoco">
              <img
                src="/social-icons/twitter.svg"
                alt="Twitter"
                width="50"
                height="50"
              />
            </Link>
            <Link href="https://www.youtube.com/channel/UCS9uQI-jC3DE0L4IpXyvr6w">
              <img
                src="/social-icons/youtube.svg"
                alt="Youtube"
                width="50"
                height="50"
              />
            </Link>
            <Link href="https://discord.gg/eNfjssszSX">
              <img
                src="/social-icons/discord.svg"
                alt="Discord"
                width="50"
                height="50"
              />
            </Link>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2021 Kaichou Project</p>
        </div>
      </div>
    </div>
  )
}

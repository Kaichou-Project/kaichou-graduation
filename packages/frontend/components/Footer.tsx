import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_bg_container}>
        <div className={styles.bg}></div>
        <div className={styles.end}></div>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.title}>
          <h2>Kiryu Coco Graduation Project</h2>
          <p>&copy; 2021 Kaichou Project</p>
        </div>
        <p className={styles.footer_subtitle}>Forever Kiryu Kai</p>
        <div className={styles.links}>
          <div className={styles.column}>
            <p>Contents</p>
            <a>Home</a>
            <a>Clips</a>
            <a>Messages</a>
            <a>Soundboard</a>
            <a>Credits</a>
          </div>
          <div className={styles.column}>
            <p>Partners</p>
            <a>Asa Coco University</a>
            <a>Coco&apos;s Graduation Farewell</a>
            <a>Operation Sleeping Dragon</a>
            <a>Cinderella Project</a>
            <a>Kiryukai Project</a>
          </div>
          <div className={styles.column}>
            <p>Legal</p>
            <a>Terms</a>
            <a>Privacy</a>
            <a>Accessibility</a>
          </div>
        </div>
        <div className={styles.links}>
          <a>
            <img
              src="/social-icons/github.svg"
              alt="Github"
              width="50"
              height="50"
            />
          </a>
          <a>
            <img
              src="/social-icons/twitter.svg"
              alt="Github"
              width="50"
              height="50"
            />
          </a>
          <a>
            <img
              src="/social-icons/youtube.svg"
              alt="Github"
              width="50"
              height="50"
            />
          </a>
          <a>
            <img
              src="/social-icons/discord.svg"
              alt="Github"
              width="50"
              height="50"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

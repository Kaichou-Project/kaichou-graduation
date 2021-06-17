import React from 'react'
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div>
      <div className={styles.footer_bg_container}>
        <div className={styles.bg}></div>
        <div className={styles.end}></div>
    </div>
      <div className={styles.footer_container}>
        <div className={styles.footer_title_container}>
          <h2>Kiryu Coco Graduation Project</h2>
          <p>&copy; 2021 Kaichou Project</p>
        </div>
        <p className={styles.footer_subtitle}>Forever Kiryu Kai</p>
        <div className={styles.footer_links_container}>
          <div className={styles.footer_links_column}>
            <p>Contents</p>
            <a>Home</a>
            <a>Clips</a>
            <a>Messages</a>
            <a>Soundboard</a>
            <a>Credits</a>
          </div>
          <div className={styles.footer_links_column}>
            <p>Partners</p>
            <a>Asa Coco University</a>
            <a>Coco&apos;s Graduation Farewell</a>
            <a>Operation Sleeping Dragon</a>
            <a>Cinderella Project</a>
            <a>Kiryukai Project</a>
          </div>
          <div className={styles.footer_links_column}>
            <p>Legal</p>
            <a>Terms</a>
            <a>Privacy</a>
            <a>Accessibility</a>
          </div>
        </div>
        <div className={styles.footer_links_container}>
          <a className={styles.footer_link_social}>Github</a>
          <a className={styles.footer_link_social}>Twitter</a>
          <a className={styles.footer_link_social}>Youtube</a>
          <a className={styles.footer_link_social}>Discord</a>
        </div>
      </div>
    </div>
  )
}

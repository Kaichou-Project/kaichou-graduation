import React from 'react'
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div>
      <div className={styles.footer_bg}></div>
      <div className={styles.footer_container}>
        <div className={styles.footer_title_container}>
          <h2 className={styles.footer_title}>Kiryu Coco Graduation Project</h2>
          <p className={styles.footer_links_title}>&copy; 2021 Kaichou Project</p>
        </div>
        <p className={styles.footer_subtitle}>Forever Kiryu Kai</p>
        <div className={styles.footer_links_container}>
          <div className={styles.footer_links_column}>
            <p className={styles.footer_links_title}>Contents</p>
            <a className={styles.footer_link}>Home</a>
            <a className={styles.footer_link}>Clips</a>
            <a className={styles.footer_link}>Messages</a>
            <a className={styles.footer_link}>Soundboard</a>
            <a className={styles.footer_link}>Credits</a>
          </div>
          <div className={styles.footer_links_column}>
            <p className={styles.footer_links_title}>Partners</p>
            <a className={styles.footer_link}>Asa Coco University</a>
            <a className={styles.footer_link}>
              Coco&apos;s Graduation Farewell
            </a>
            <a className={styles.footer_link}>Operation Sleeping Dragon</a>
            <a className={styles.footer_link}>Cinderella Project</a>
            <a className={styles.footer_link}>Kiryukai Project</a>
          </div>
          <div className={styles.footer_links_column}>
            <p className={styles.footer_links_title}>Legal</p>
            <a className={styles.footer_link}>Terms</a>
            <a className={styles.footer_link}>Privacy</a>
            <a className={styles.footer_link}>Accessibility</a>
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

import React from 'react'
import styles from './Navigation.module.scss'
import SakuraParticles from '../SakuraParticles/SakuraParticles'
import Link from 'next/link'

interface NavProps {
  title: string
  page: Page
  cornerText?: string
  mode?: Mode
}

export enum Page {
  HOME = 'home',
  MESSAGES = 'messages',
  FANART = 'fanart',
  VIDEOS = 'videos',
  SOUNDBOARD = 'soundboard',
  CREDITS = 'credits',
}

export enum Mode {
  DEFAULT = '',
  FORM = 'form',
}

interface NavItem {
  page: Page
  iconPath: string
}

const navItems: NavItem[] = [
  {
    page: Page.HOME,
    iconPath: 'navigation/HomeIcon.svg',
  },
  {
    page: Page.MESSAGES,
    iconPath: 'navigation/MessageIcon.svg',
  },
  {
    page: Page.FANART,
    iconPath: 'navigation/ImageIcon.svg',
  },
  {
    page: Page.VIDEOS,
    iconPath: 'navigation/VideoIcon.svg',
  },
  {
    page: Page.SOUNDBOARD,
    iconPath: 'navigation/SoundIcon.svg',
  },
  {
    page: Page.CREDITS,
    iconPath: 'navigation/InfoIcon.svg',
  },
]

export default function Navigation({
  title,
  page,
  cornerText = '桐生ココ',
  mode = Mode.DEFAULT,
}: NavProps) {
  return (
    <div className={`${styles.navigation} ${mode && styles[mode]}`}>
      <div className={styles.name}>
        <img src="navigation/Corner-nofilter.svg" />
        <p>{cornerText}</p>
      </div>

      <div className={styles.navigators}>
        <img src="navigation/Navbar-nofilter.svg" className={styles.navbar} />

        <div className={styles.icons}>
          {navItems.map((item) => (
            <Link key={item.iconPath} href={item.page.toString()}>
              <div className={styles.icon}>
                <p className={styles.icon_text}>
                  {item.page.charAt(0).toUpperCase() + item.page.slice(1)}
                </p>
                <img src={item.iconPath} alt={item.page.toString()} />
                {page === item.page ? (
                  <img src="navigation/Dot.svg" className={styles.active} />
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.title}>
        <div className={styles.box}>
          <p>{title}</p>
        </div>
      </div>

      {mode !== Mode.FORM && (
        <div>
          <img className={styles.coco} src="coco_peek.png" />
          <SakuraParticles />
        </div>
      )}
    </div>
  )
}

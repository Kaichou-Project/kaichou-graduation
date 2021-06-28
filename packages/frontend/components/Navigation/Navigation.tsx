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
  HOME = '/',
  MESSAGES = 'messages',
  FANART = 'fanart',
  CLIPS = 'clips',
  SOUNDBOARD = 'soundboard',
  CREDITS = 'credits',
}

export enum Mode {
  DEFAULT = '',
  FORM = 'form',
}

interface NavItem {
  page: Page
  name: string
  iconPath: string
}

const navItems: NavItem[] = [
  {
    page: Page.HOME,
    name: 'Home',
    iconPath: 'navigation/HomeIcon.svg',
  },
  {
    page: Page.MESSAGES,
    name: 'Messages',
    iconPath: 'navigation/MessageIcon.svg',
  },
  {
    page: Page.FANART,
    name: 'Fanart',
    iconPath: 'navigation/ImageIcon.svg',
  },
  {
    page: Page.CLIPS,
    name: 'Clips',
    iconPath: 'navigation/VideoIcon.svg',
  },
  {
    page: Page.SOUNDBOARD,
    name: 'Soundboard',
    iconPath: 'navigation/SoundIcon.svg',
  },
  {
    page: Page.CREDITS,
    name: 'Credits',
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
                <p className={styles.icon_text}>{item.name}</p>
                <img src={item.iconPath} alt={item.page.toString()} />
                {page === item.page && (
                  <img src="navigation/Dot.svg" className={styles.active} />
                )}
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

      {mode != Mode.FORM && <SakuraParticles />}
    </div>
  )
}

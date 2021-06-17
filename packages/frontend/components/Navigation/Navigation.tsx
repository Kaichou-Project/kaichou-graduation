import React from 'react'
import styles from './Navigation.module.scss'
import SakuraParticles from '../SakuraParticles/SakuraParticles'
import Link from 'next/link'

interface NavProps {
  title: string
  page: Page
}

export enum Page {
  HOME = 'home',
  MESSAGES = 'messages',
  FANART = 'fanart',
  CLIPS = 'clips',
  SOUNDBOARD = 'soundboard',
  CREDITS = 'credits',
}

interface NavItem {
  page: Page
  iconPath: string
}

export default function Navigation({ title, page }: NavProps) {
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
      page: Page.CLIPS,
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

  return (
    <div className={styles.navigation}>
      <img src="navigation/Corner.svg" className={styles.name} />
      <div className={styles.navigators}>
        <img src="navigation/Navbar.svg" className={styles.navbar} />

        <div className={styles.icons}>
          {navItems.map((item) => (
            <Link key={item.iconPath} href={item.page.toString()}>
              <div className={styles.icon}>
                <img src={item.iconPath} />
                {page === item.page ? (
                  <img
                    src="navigation/Dot.svg"
                    alt={item.page}
                    className={styles.active}
                  />
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.title}>
        <img src="navigation/Title.svg" />
        <p>{title}</p>
      </div>
      <div className={styles.image}></div>
      <SakuraParticles />
    </div>
  )
}

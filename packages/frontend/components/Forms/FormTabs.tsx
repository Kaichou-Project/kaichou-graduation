import React, { useState } from 'react'
import tabsEnum from './tabsEnum'
import styles from './Form.module.scss'

interface propsInterface {
  onChange: (tab: tabsEnum) => void
}

export default function FormTabs({ onChange }: propsInterface) {
  const [currentTab, setCurrentTab] = useState(tabsEnum.MESSAGE)

  function changeTab(tab: tabsEnum) {
    if (currentTab === tab) return
    onChange(tab)
    setCurrentTab(tab)
  }

  return (
    <div className={styles.tabs}>
      <label>I want to submit a ...</label>
      <div
        onClick={() => changeTab(tabsEnum.MESSAGE)}
        className={`${styles.button} ${
          currentTab === tabsEnum.MESSAGE ? styles.selected : ''
        }`}
      >
        MESSAGE
      </div>
      <div
        onClick={() => changeTab(tabsEnum.FANART)}
        className={`${styles.button} ${
          currentTab === tabsEnum.FANART ? styles.selected : ''
        }`}
      >
        FANART
      </div>
      <div
        onClick={() => changeTab(tabsEnum.CLIP)}
        className={`${styles.button} ${
          currentTab === tabsEnum.CLIP ? styles.selected : ''
        }`}
      >
        VIDEO/CLIP
      </div>
    </div>
  )
}

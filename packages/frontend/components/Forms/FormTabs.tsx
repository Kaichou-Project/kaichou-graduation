import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Form.module.scss'

export default function FormTabs({ onChange }) {
  const [currentTab, setCurrentTab] = useState('message')

  function changeTab(tab: string) {
    if (currentTab === tab) return
    onChange(tab)
    setCurrentTab(tab)
  }

  return (
    <div className={styles.tabs}>
      <label>I want to submit a ...</label>
      <div
        onClick={() => changeTab('message')}
        className={`${styles.button} ${
          currentTab === 'message' ? styles.selected : ''
        }`}
      >
        MESSAGE
      </div>
      <div
        onClick={() => changeTab('fanart')}
        className={`${styles.button} ${
          currentTab === 'fanart' ? styles.selected : ''
        }`}
      >
        FANART
      </div>
      <div
        onClick={() => changeTab('video')}
        className={`${styles.button} ${
          currentTab === 'video' ? styles.selected : ''
        }`}
      >
        VIDEO/CLIP
      </div>
    </div>
  )
}
FormTabs.propTypes = {
  onChange: PropTypes.func,
}

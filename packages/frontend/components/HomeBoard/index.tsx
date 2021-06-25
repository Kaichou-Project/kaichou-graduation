import React from 'react'
import styles from './styles.module.scss'
import StackGrid from 'react-stack-grid'

function Card({ children }) {
  return <div style={{ background: 'red' }}>{children}</div>
}

export default function HomeBoard() {
  const items = []
  for (let i = 0; i < 20; i++) {
    items.push(<Card key={i}>Item {i}</Card>)
  }
  return (
    <div className={styles.container}>
      <div>
        <h2>Messages from the Community</h2>
        <div>Submit your own</div>
        <StackGrid columnWidth={400}>{items}</StackGrid>
      </div>
    </div>
  )
}

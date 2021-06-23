/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import cardInfo from '../../interfaces/cardInfo'
import MessageList from './MessageList'
import messageProps from '../../interfaces/messageProps'

const soundCategoryList: messageProps[] = [
  {
    key: 'Category 1',
    cardData: [
      {
        title: 'Good morning mother fxcker',
        message: 'Some random text please fucking',
        author: '-Author',
      },
      {
        title: 'Good morning mother fxcker',
        message: 'Some random text please fucking',
        author: '-Author',
      },
      {
        title: 'Good morning mother fxcker',
        message: 'Some random text please fucking',
        author: '-Author',
      },
      {
        title: 'Good morning mother fxcker',
        message: 'Some random text please fucking',
        author: '-Author',
      },
      {
        title: 'Good morning mother fxcker',
        message: 'Some random text please fucking work',
        author: '-Author',
      },
      {
        title: 'Good morning mother fxcker',
        message: 'Some random text please fucking',
        author: '-Author',
      },
    ],
  },
]
export default function SoundBoard() {
  return (
    <>
      <h2>
        Coco Sound Board
        <br />
        -- Pending for header--{' '}
      </h2>
      {soundCategoryList.map((soundCategory, i) => (
        <MessageList key={i} {...soundCategory} />
      ))}
    </>
  )
}

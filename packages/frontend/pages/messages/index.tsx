import React from 'react'
import cardInfo from '../../interfaces/cardInfo'
import Footer from '../../components/Footer/Footer'
import Navigation, { Page } from '../../components/Navigation/Navigation'
import ToTheTopButton from '../../components/ToTheTopButton'
import MessageList from '../../components/MessageCards/MessageList'

const Messages: cardInfo[] = [
  {
    title: 'Dear Coco',
    message:
      'In quis vel, mattis urna vel volutpat morbi ante vel. Quis condimentum at at ipsum, consequat magna lorem fames morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna velit tellus vulputate. Libero scelerisque mattis ac gravida ut id mattis odio. In quis vel, mattis urna vel volutpat morbi ante vel. Quis condimentum at at ipsum, consequat magna lorem fames morbi.',
    author: '- Latin Guy ',
  },
  {
    title: 'Dear Coco',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna velit tellus vulputate. Libero scelerisque mattis ac gravida ut id mattis odio. In quis vel, mattis urna vel volutpat morbi ante vel. Quis condimentum at at ipsum, consequat magna lorem fames morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna velit tellus vulputate. Libero scelerisque mattis ac gravida ut id mattis odio. In quis vel, mattis urna vel volutpat morbi ante vel. Quis condimentum at at ipsum, consequat magna lorem fames morbi.',
    author: '-Author',
  },
  {
    title: 'Dear Coco',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna velit tellus vulputate. Libero scelerisque mattis ac gravida ut id mattis odio. In quis vel, mattis urna vel volutpat morbi ante vel. Quis condimentum at at ipsum, consequat magna lorem fames morbi. Quis condimentum at at ipsum, consequat magna lorem fames morbi.',
    author: '- A placeholder generator ',
  },
  {
    title: 'Dear Coco',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna velit tellus vulputate. Libero scelerisque mattis ac gravida ut id mattis odio. In quis vel, mattis urna vel volutpat morbi ante vel. Quis condimentum at at ipsum, consequat magna lorem fames morbi. Quis condimentum at at ipsum, consequat magna lorem fames morbi.',
    author: '-Author',
  },
  {
    title: 'Dear Coco',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna velit tellus vulputate. Libero scelerisque mattis ac gravida ut id mattis odio. In quis vel, mattis urna vel volutpat morbi ante vel. Quis condimentum at at ipsum, consequat magna lorem fames morbi.',
    author: '-Author',
  },
  {
    title: 'Dear Coco',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna velit tellus vulputate. Libero scelerisque mattis ac gravida ut id mattis odio. In quis vel, mattis urna vel volutpat morbi ante vel. Quis condimentum at at ipsum, consequat magna lorem fames morbi.',
    author: '-Author',
  },
]

export default function MessageBoard() {
  return (
    <>
      <Navigation title="Messages" page={Page.MESSAGES} />
      <MessageList cardData={Messages} />
      <ToTheTopButton />
      <Footer />
    </>
  )
}

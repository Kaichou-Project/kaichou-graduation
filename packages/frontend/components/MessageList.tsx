import React from 'react'
import Message from './Message'

export default function MessageList({ messages }) {
  return messages.map((message) => (
    <Message key={message.id} message={message} />
  ))
}

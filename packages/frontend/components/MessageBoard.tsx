import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MessageList from './MessageList'

export default function MessageBoard() {
  const [messages, setMessages] = useState([])
  const messageNameRef = React.useRef<HTMLInputElement>(null)
  const messageMsgRef = React.useRef<HTMLTextAreaElement>(null)

  function uploadMessage() {
    const messageName: string = messageNameRef.current.value
    const messageMsg: string = messageMsgRef.current.value
    if (messageName === '' || messageMsg === '') return
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: uuidv4(), name: messageName, msg: messageMsg },
    ])

    messageNameRef.current.value = null
    messageMsgRef.current.value = null
  }

  return (
    <>
      <h2>Welcome to the Message Board</h2>
      <h3>Write New Message!</h3>
      <p>Display Name:</p>
      <input ref={messageNameRef} type="text" />
      <p>Your Message:</p>
      <textarea ref={messageMsgRef} name="message" cols={40} rows={5} />
      <br />
      <button onClick={uploadMessage}>Submit!</button>
      <br />
      <br />
      <h3>Messages for Coco</h3>
      <MessageList messages={messages} />
    </>
  )
}

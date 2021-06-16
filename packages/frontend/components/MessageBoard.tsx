import React, { useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Mongoose } from 'mongoose'

import MessageList from './MessageList'
import ImageList from './ImageList'
import VideoList from './VideoList'

export default function MessageBoard() {
    const [messages, setMessages] = useState([])
    const messageAuthorRef = React.useRef<HTMLInputElement>(null)
    const messageContentRef = React.useRef<HTMLTextAreaElement>(null)

    function uploadMessage(e){
        const messageAuthor:String = messageAuthorRef.current.value
        const messageAvatar:String = null
        const messageContent:String = messageContentRef.current.value

        if(messageAuthor === "" || messageContent === "") return
        setMessages(prevMessages => [...prevMessages, {id:uuidv4(), author:messageAuthor, content:messageContent}])

        messageAuthorRef.current.value = null
        messageContentRef.current.value = null
    }

    return (
        <>
        <h2>Welcome to the Message Board</h2>
        <h3>Write New Message!</h3>
        <p>Display Name:</p>
        <input ref={messageAuthorRef} type="text" />
        <p>Your Message:</p>
        <textarea ref={messageContentRef} name="message" cols={40} rows={5}></textarea>
        <br/>
        <button onClick={uploadMessage}>Submit!</button>
        <br/>
        <br/>
        <h3>Messages for Coco</h3>
        <MessageList messages={messages}/>
        </>
    )
}

import React, { useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import MessageList from './MessageList'
import { Mongoose } from 'mongoose'

export default function MessageBoard() {
    const [messages, setMessages] = useState([])
    const messageNameRef = React.useRef<HTMLInputElement>(null)
    const messageMsgRef = React.useRef<HTMLTextAreaElement>(null)

    function uploadMessage(e){
        const messageAuthor:String = messageNameRef.current.value
        const messageAvatar:String = null
        const messageContent:String = messageMsgRef.current.value



        if(messageAuthor === "" || messageContent === "") return
        setMessages(prevMessages => [...prevMessages, {id:uuidv4(), name:messageAuthor, msg:messageContent}])

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
        <textarea ref={messageMsgRef} name="message" cols={40} rows={5}></textarea>
        <br/>
        <button onClick={uploadMessage}>Submit!</button>
        <br/>
        <br/>
        <h3>Messages for Coco</h3>
        <MessageList messages={messages}/>
        </>
    )
}

import React, { useState, useRef, useEffect} from 'react'
import Message from './Message'
import { v4 as uuidv4 } from 'uuid'

export function MessageList({ messages }) {
    return (
        messages.map(message => {
            return <Message key={message.id} message={message}/>
        })
        
    )
}

export default function MessageBoard() {
    const [messages, setMessages] = useState([])
    const messageNameRef = React.useRef<HTMLInputElement>(null)
    const messageMsgRef = React.useRef<HTMLTextAreaElement>(null)

    function uploadMessage(e){
        const messageName:String = messageNameRef.current.value
        const messageMsg:String = messageMsgRef.current.value
        if(messageName === "" || messageMsg === "") return
        setMessages(prevMessages => {
            return [...prevMessages, {id:uuidv4(), name:messageName, msg:messageMsg}]
        })

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
        <br></br>
        <button onClick={uploadMessage}>Submit!</button>
        <br></br>
        <h3>Messages for Coco</h3>
        <br></br>
        <MessageList messages={messages}/>
        </>
    )
}

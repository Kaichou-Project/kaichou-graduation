import React, { useState, useRef, useEffect} from 'react'
import ImageBoard from './ImageBoard'
import MessageBoard from './MessageBoard'
import VideoBoard from './VideoBoard'

export default function BoardSelector() {

    function loadMsgBoard(){
        return (<MessageBoard/>)
    }

    function loadVidBoard(){
        return (<VideoBoard/>)
    }

    function loadImgBoard(){
        return (<ImageBoard/>)
    }

    return (
        <div>
            <h2>Board Selector</h2>
            <br/>
            <button onClick={loadMsgBoard}>Message Board</button>
            <button onClick={loadVidBoard}>Video Board</button>
            <button onClick={loadImgBoard}>Image Board</button>
        </div>
    )
}

import React from "react";

export default function Message( {message} ) {
    return (
        <div>
            <h4>Author: {message.author}</h4>
            <p>Message:</p>
            <p>{message.content}</p>
            <br/>
        </div>
    )
}
import React from "react";

export default function Message( {message} ) {
    return (
        <div>
            <h4>Name: {message.name}</h4>
            <p>Message:</p>
            <p>{message.msg}</p>
            <br/>
        </div>
    )
}
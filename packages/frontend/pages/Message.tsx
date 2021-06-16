import React from "react";

export default function Message( {message, msgClass=""}) {
    return (
        <div className={msgClass}>
            <h4><span className="label">Name: </span>{message.name}</h4>
            <p className="msgBody"><span className="label">Message: </span>{message.msg}</p>
            <br/>
        </div>
    )
}
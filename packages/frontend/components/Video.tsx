import React from 'react'
import ReactPlayer from 'react-player'

export default function Video({ video }) {
  return (
    <div>
      <h4>Creator: {video.creator}</h4>
      <h4>Title: {video.title}</h4>
      <ReactPlayer url={video.url} />
    </div>
  )
}

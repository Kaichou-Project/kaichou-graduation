import React from 'react'

export default function Video({ video }) {
  return (
    <div>
      <h4>Creator: {video.creator}</h4>
      <p>Placeholder for embeded player: {video.url}</p>
    </div>
  )
}

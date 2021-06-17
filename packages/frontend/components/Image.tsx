import React from 'react'

interface Image {
  creator: string
  url: string
}

export default function Image({ image }) {
  return (
    <div>
      <h4>Creator: {image.creator}</h4>
      <img src={image.url} width={300} height={250}></img>
    </div>
  )
}

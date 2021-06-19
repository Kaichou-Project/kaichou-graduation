import React from 'react'

export interface ImageInterface {
  id: string
  creator: string
  url: string
}

interface ImageProps {
  key: string
  image: ImageInterface
}
export default function Image({ image }: ImageProps) {
  return (
    <div>
      <p>Creator: {image.creator}</p>
      <img src={image.url} width={300} height={250}></img>
    </div>
  )
}

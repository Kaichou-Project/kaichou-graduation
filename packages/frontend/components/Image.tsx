import React from 'react'

interface ImageInterface {
  id: string
  creator: string
  url: string
}
  creator: string
  url: string
}
interface ImageProps {
  key: string
  image: ImageInterface
}
export default function Image(props: ImageProps) {
  return (
    <div>
      <h4>Creator: {props.image.creator}</h4>
      <img src={props.image.url} width={300} height={250}></img>
    </div>
  )
}
  return (
    <div>
      <h4>Creator: {image.creator}</h4>
      <img src={image.url} width={300} height={250}></img>
    </div>
  )
}

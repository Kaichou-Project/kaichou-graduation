import React from 'react'
import Image, { ImageInterface } from './Fanart'

export interface ImageListProps {
  images: ImageInterface[]
}

export default function ImageList({ images }: ImageListProps) {
  return (
    <>
      {images.map((image) => (
        <Image key={image.id} image={image} />
      ))}
    </>
  )
}

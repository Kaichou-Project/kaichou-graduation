import React from 'react'
import Image from './Image'

interface ImageList {
  images: Image
}

export default function ImageList({ images }) {
  return images.map((image) => <Image key={image.id} image={image} />)
}

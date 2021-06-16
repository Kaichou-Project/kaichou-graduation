import React from 'react'
import Image from './Image'

export default function ImageList({ images }) {
  return images.map((image) => <Image key={image.id} image={image} />)
}

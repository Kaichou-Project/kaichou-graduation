import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ImageInterface } from './Image'
import ImageList from './ImageList'

export default function ImageBoard() {
  const [images, setImages] = useState<ImageInterface[]>([])
  const imageCreatorRef = React.useRef<HTMLInputElement>(null)
  const imageUrlRef = React.useRef<HTMLInputElement>(null)

  function uploadImage(e) {
    const imageCreator: string = imageCreatorRef.current.value
    const imageUrl: string = imageUrlRef.current.value

    if (imageCreator === '' || imageUrl === '') return
    setImages((prevImages) => [
      ...prevImages,
      {
        id: uuidv4(),
        creator: imageCreator,
        url: imageUrl,
      },
    ])
    imageCreatorRef.current.value = null
    imageUrlRef.current.value = null
  }

  return (
    <>
      <h2>Welcome to the Image Board</h2>
      <h3>Share new Image!</h3>
      <p>Creator Name:</p>
      <input ref={imageCreatorRef} type="text" />
      <p>Image URL:</p>
      <input ref={imageUrlRef} type="url" />
      <br />
      <button onClick={uploadImage}>Submit!</button>
      <br />
      <br />
      <h3>Fanart for Coco</h3>
      <ImageList images={images} />
    </>
  )
}

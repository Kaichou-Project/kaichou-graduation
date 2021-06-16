import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import VideoList from './VideoList'

export default function VideoBoard() {
  const [videos, setVideos] = useState([])
  const videoCreatorRef = React.useRef<HTMLInputElement>(null)
  const videoLinkRef = React.useRef<HTMLInputElement>(null)

  function uploadVideo(e) {
    const videoCreator: string = videoCreatorRef.current.value
    const videoLink: string = videoLinkRef.current.value

    if (videoCreator === '' || videoLink === '') return
    setVideos((prevVideos) => [
      ...prevVideos,
      { id: uuidv4(), creator: videoCreator, url: videoLink },
    ])
    ;(videoCreatorRef.current.value = null), (videoLinkRef.current.value = null)
  }

  return (
    <>
      <h2>Welcome to the Video Board</h2>
      <h3>Share new Video!</h3>
      <p>Creator Name</p>
      <input ref={videoCreatorRef} type="text" />
      <p>Video Link:</p>
      <input ref={videoLinkRef} type="text" />
      <br />
      <button onClick={uploadVideo}>Submit!</button>
      <br />
      <br />
      <h3>Videos for Coco</h3>
      <VideoList videos={videos} />
    </>
  )
}

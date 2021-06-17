import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import VideoList from './VideoList'
import { VideoInterface } from './Video'
import styles from '../styles/videoBoard.module.scss'

export default function VideoBoard() {
  const [videos, setVideos] = useState<VideoInterface[]>([])
  const videoCreatorRef = React.useRef<HTMLInputElement>(null)
  const videoTitleRef = React.useRef<HTMLInputElement>(null)
  const videoLinkRef = React.useRef<HTMLInputElement>(null)

  function uploadVideo(e) {
    const videoCreator: string = videoCreatorRef.current.value
    const videoLink: string = videoLinkRef.current.value
    const videoTitle: string = videoTitleRef.current.value

    if (videoCreator === '' || videoLink === '' || videoTitle === '') return
    setVideos((prevVideos) => [
      ...prevVideos,
      {
        id: uuidv4(),
        creator: videoCreator,
        title: videoTitle,
        url: videoLink,
      },
    ])
    videoCreatorRef.current.value = null
    videoLinkRef.current.value = null
    videoTitleRef.current.value = null
  }

  return (
    <>
      <h2>Welcome to the Video Board</h2>
      <h3>Share new Video!</h3>
      <p>Creator Name:</p>
      <input ref={videoCreatorRef} type="text" />
      <p>Video Title:</p>
      <input ref={videoTitleRef} />
      <p>Video Link:</p>
      <input ref={videoLinkRef} type="url" />
      <br />
      <button onClick={uploadVideo}>Submit!</button>
      <br />
      <br />
      <h3>Videos for Coco</h3>
      <div className={styles.listContainer}>
        <VideoList videos={videos} />
      </div>
    </>
  )
}

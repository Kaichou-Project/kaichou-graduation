import React from 'react'
import Video from './Video'

interface VideoList {
  videos: video[]
}

export default function VideoList({ videos }) {
  return videos.map((video) => <Video key={video.id} video={video} />)
}

import React from 'react'
import Video from './Video'

interface VideoListProps {
  videos: VideoInterface[]
}

export default function VideoList({ videos }) {
  return videos.map((video) => <Video key={video.id} video={video} />)
}

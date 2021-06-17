import React from 'react'
import Video from './Video'

export interface VideoListProps {
  videos: VideoInterface[]
}

export default function VideoList({ videos }: VideoListProps) {
  return videos.map((video) => <Video key={video.id} video={video} />)
}

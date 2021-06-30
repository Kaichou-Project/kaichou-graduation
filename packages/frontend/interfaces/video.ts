export interface VideoInterface {
  creator: string
  title: string
  videoEmbedUrl: string
}

export interface VideoResponseInterface extends VideoInterface {
  _id: string
}

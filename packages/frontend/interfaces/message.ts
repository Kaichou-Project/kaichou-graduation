export interface MessageInterface {
  creator: string
  content: string
}

export interface MessageResponseInterface extends MessageInterface {
  _id: string
  createdAt: string
}

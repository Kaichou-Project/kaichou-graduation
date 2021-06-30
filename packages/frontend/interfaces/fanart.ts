export interface FanartInterface {
  creator: string
  imageUrl: string
}

export interface FanartResponseInterface extends FanartInterface {
  _id: string
  createdAt: string
}

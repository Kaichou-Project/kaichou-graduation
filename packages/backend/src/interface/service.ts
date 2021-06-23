import { Types } from 'mongoose'

interface StoreDocument {
  creator: string
}

interface BaseDocument extends StoreDocument {
  _id: Types.ObjectId
  isVerified: boolean
}

export interface StoreMessageParameter extends StoreDocument {
  messages: [
    {
      content: string
      lang: string
    }
  ]
}

export interface StoreFanartParameter extends StoreDocument {
  imageUrl: string
}

export interface StoreVideoParameter extends StoreDocument {
  videoEmbedUrl: string
}

export interface UpdateMessageParameter extends BaseDocument {
  messages: [
    {
      content: string
      lang: string
    }
  ]
}

export interface UpdateFanartParameter extends BaseDocument {
  imageUrl: string
}

export interface UpdateVideoParameter extends BaseDocument {
  videoEmbedUrl: string
}

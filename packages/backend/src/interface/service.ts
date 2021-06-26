interface StoreDocument {
  creator: string
}

export interface StoreMessageParameter extends StoreDocument {
  content: string
}

export interface StoreFanartParameter extends StoreDocument {
  imageUrl: string
}

export interface StoreVideoParameter extends StoreDocument {
  videoEmbedUrl: string
}

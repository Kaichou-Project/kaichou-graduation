import { Types } from 'mongoose'

// TODO for validate embed url format
export const isValidEmbedUrl = (videoEmbedUrl: string): boolean => {
  const REG = ''
  return !!videoEmbedUrl.match(REG)
}

export const isValidId = (id: string) =>
  Types.ObjectId.isValid(id) ? true : false

export const isUndefined = (item: any) =>
  typeof item === 'undefined' ? true : false
export const isString = (item: any) => (typeof item === 'string' ? true : false)

export const isBoolean = (item: any) =>
  typeof item === 'boolean' ? true : false

import { Types } from 'mongoose'

// TODO for validate embed url format
export const isValidEmbedUrl = (videoEmbedUrl: string): boolean => {
  const REG = ''
  return !!videoEmbedUrl.match(REG)
}

export const isValidId = (id: string) =>
  Types.ObjectId.isValid(id) ? true : false

/**
 * Check the type of given item is undefined or not
 * @param {any} item - item whose type will be checked
 * @returns {bool} true if item's type is undefined and vice versa
 */
export const isUndefined = (item: any): boolean => typeof item === 'undefined'

/**
 * Check the type of given item is string or not
 * @param {any} item - item whose type will be checked
 * @returns {bool} true if item's type is string and vice versa
 */
export const isString = (item: any): boolean => typeof item === 'string'

/**
 * Check the type of given item is boolean or not
 * @param {any} item - item whose type will be checked
 * @returns {bool} true if item's type is boolean and vice versa
 */
export const isBoolean = (item: any): boolean => typeof item === 'boolean'

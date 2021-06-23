import { Types } from 'mongoose'

/**
 * Check validity of a given url
 * @param {string} videoEmbedUrl - video embed url
 * @returns {bool} true if valid and vice versa
 */
export const isValidEmbedUrl = (videoEmbedUrl: string): boolean => {
  const REG = '' // TODO need to decide the regex
  return !!videoEmbedUrl.match(REG)
}

/**
 * Check validity of a given id
 * @param {string} id - document's _id
 * @returns {bool} true if valid and vice versa
 */
export const isValidId = (id: string): boolean => Types.ObjectId.isValid(id)

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

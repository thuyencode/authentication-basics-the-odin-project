import __dirname from '@/__dirname'
import { compare, hash } from 'bcrypt-ts'
import path from 'path'

/**
 * Get the path to the `public` folder or the files in it
 *
 * @export
 * @param {string} [fileName=''] Leave it empty to only get the `public` folder path
 * @returns {string}
 */
export function getPublicPath(fileName: string = '') {
  return path.join(__dirname, 'public', fileName)
}

/**
 * Get the path to the `views` folder or the files in it
 *
 * @export
 * @param {string} [fileName=''] Leave it empty to only get the `views` folder path
 * @returns {string}
 */
export function getViewsPath(fileName: string = '') {
  return path.join(__dirname, 'views', fileName)
}

export async function hashPassword(password: string) {
  return await hash(password, 8)
}

export async function verifyPassword(content: string, hash: string) {
  return await compare(content, hash)
}

import __dirname from '@/__dirname'
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

import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

/**
 * @author Brandon Montealegre <brandonmontealegre15@gmail.com>
 * @param {String} path - Hace referencia a la ruta
 * @returns {object} Retorna el JSON  de la ruta
 */
export const readJSON = path => require(path) 

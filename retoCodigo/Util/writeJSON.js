import { writeFileSync } from 'node:fs'

/**
 * Sobre escribir o escribir un archivo json en la ruta especifica
 * @param {String} path - La ruta donde se va guardar
 * @param {JSON} data - JSON que se desea guardar
 * @returns {Boolean} Retorna true si todo salio bien, false si algo fallo
 */
export function writeJSON(path, data){
    try {
        writeFileSync(path,data)
        return true
    } catch (error) {
        console.error('writeJSON : ', error)
        return false
    }

}

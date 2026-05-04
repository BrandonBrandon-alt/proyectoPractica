import { readJSON } from "./Util/readJSON.js";
import { writeJSON } from "./Util/writeJSON.js";

//const Heroes = readJSON('../Data/heroes.json')

/**
 * Agregar un nuevo heroe y lo guarda en el JSON
 * @param {Object} newHeroe - Nuevo Heroe que se dea guardar
 * @returns {object} Retorna un nuevo heroe 
 */
function addHeroe(newHeroe) {
    try {
        const { heroes } = Heroes
        heroes.push(newHeroe)
        if (writeJSON('./Data/heroes.json', JSON.stringify(Heroes, null, 2))) return newHeroe
        else throw Error('No se pudo guardar el JSON')


    } catch (error) {
        console.error('addHeroe : ', error)
    }
}

/**const Heroe = {
    name: 'Super Man',
    poderes: ['Super Fuerza', 'Volar', 'Rayos de los ojos' ],
    lanzarAtaque : function(){
        const[fuerza] = this.poderes
        console.log('soy ' + this.name + 'y te lanzo mi primer poder '+ fuerza)

    }
}
    /** */

//console.log(Heroe.lanzarAtaque())
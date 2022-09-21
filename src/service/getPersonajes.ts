import Personajes from "../types/personajes.types";

/**Función que realiza el llamado a la API de Rick y Morty para obtener información sobre los personajes. 
 * En caso de paginacion.componente enviará como argumento un string que contiene la palabra "page" que realizará el pedido de la
 * siguiente o anterior página según corresponda. En el caso del componente filtros.componente realiza el pedido de personajes que 
 * coincidan con la búsqueda del usuario.
 * 
 * @author Sara Ramírez A.
 * @param {string} nombre
 * @returns {array} 
 */

export const getPersonajesHome = async (nombre?: string): Promise<Personajes[] | unknown> => {
    let params = "?"

    if (nombre) {
        nombre?.includes('page')
            ? params += nombre
            : params += `name=${nombre}`
    };

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);
        const results = await response.json();
        return results;


    } catch (error) {
        console.log(error);
    };
}

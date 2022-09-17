import Personajes from "../types/personajes.types";

export const getPersonajesHome = async (nombre?: string): Promise<Personajes[] | unknown> => {
    let params = "?"

    if (nombre) {
        if (nombre?.includes('page')) {
            params += nombre
        } else {
            params += `name=${nombre}`
        }
    }


    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
        .then(data => data.json())
        // .then(data => data.results)
        .then(data => data)
}

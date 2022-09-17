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


    return fetch(`https://rickandmortyapi.com/api/character/?page=2`)
        .then(data => data.json())
        .then(data => data)
        // .then(data => console.log(data.results))
};



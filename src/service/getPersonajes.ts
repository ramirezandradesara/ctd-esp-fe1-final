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

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);
        const results = await response.json();
        return results;
        

    } catch (error) {
        console.log(error);
    }
}

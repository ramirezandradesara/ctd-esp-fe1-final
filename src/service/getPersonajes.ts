import Personaje from "../types/personajes.types";

export const getPersonajesHome = async (nombre?: string): Promise<Personaje[] | unknown> => {
    let params = "?";
    if (nombre) {
        if (nombre?.includes("page")) {
            params += nombre;
        } else {
            params += `name=${nombre}`;
        }
    }

    try {
        return fetch(`https://rickandmortyapi.com/api/character/${params}`)
            .then((data) => data.json())
            .then((data) => data);
    } catch (error) {
        return error;
    }
};
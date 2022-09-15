// OBTENER TODOS LOS PERSONAJES 

export const getPersonajesHome = async (params) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${params * 10}`
    try {
        const response = await fetch(url);
        const results = await response.json();
        return results.results;

    } catch (error) {
        console.log(error);
    }
};


// OBTENER PERSONAJES FILTRADOS

export const getPersonajeFiltrado = async (nombre) => {
    let params = "?"
    if (nombre) {
        params += `name=${nombre}`
    }
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
        .then(data => data.json())
        .then(data => data.results)
}
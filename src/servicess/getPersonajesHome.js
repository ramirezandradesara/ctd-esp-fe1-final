export const getPersonajesHome = async (params) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${params * 10}`
    try {
        const response = await fetch(url);
        const results = await response.json();
        // console.log(results.results);
        return results.results;

    } catch (error) {
        console.log(error);
    }
};
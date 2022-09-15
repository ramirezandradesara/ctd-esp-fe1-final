import { getPersonajesHome } from "../servicess/getPersonajesHome";

export const comenzarDescargarPokemones = () => {
    return{
        type: "DESCARGA_INICIAL_PERSONAJES",
        // isLoading: true,
    }
};

export const descargaPersonajesExitosa = (personajes) => {
    return{
        type: "DESCARGA_EXITOSA_PERSONAJES",
        // isLoading: false,
        payload: {
            personajes: personajes 
        }
        // personajes // podemos poner solo porque gracias a EcM6 si se llama igual no hace falta 
    }
};

export const descargaPersonajesErrorea = (error) => {
    return {
        type: "DESCARGA_ERRONEA_PERSONAJES",
        // isLoading: false,
        payload: {
            error: error
        }
    }
};

// thunk

export const busquedaPersonajes = (page) => {
    return async (dispatch, getState) => {
     
            dispatch(comenzarDescargarPokemones());
            try {
                const personajes = await getPersonajesHome(page);
                console.log(personajes);
                dispatch(descargaPersonajesExitosa(personajes));
            } catch (error) {
                dispatch(descargaPersonajesErrorea(error));
            }
    
    
    }
}
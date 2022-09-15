import { getPersonajesHome } from "../servicess/getPersonajesHome";

export const comenzarDescargarPersonajes = () => {
    return{
        type: "DESCARGA_INICIAL_PERSONAJES",
        isLoading: true,
    }
};

export const descargaPersonajesExitosa = (personajes) => {
    return{
        type: "DESCARGA_EXITOSA_PERSONAJES",
        isLoading: false,
        // payload: {
        //     personajes: personajes 
        // }
        personajes: personajes // podemos poner solo porque gracias a EcM6 si se llama igual no hace falta 
    }
};

export const descargaPersonajesErrorea = (error) => {
    return {
        type: "DESCARGA_ERRONEA_PERSONAJES",
        isLoading: false,
        // payload: {
        //     error: error
        // }
        error: error
    }
};

// thunk

export const busquedaPersonajes = (page) => {
    return async (dispatch, getState) => {   
            dispatch(comenzarDescargarPersonajes());
            try {
                const personajes = await getPersonajesHome(page);
                dispatch(descargaPersonajesExitosa(personajes));
            } catch (error) {
                dispatch(descargaPersonajesErrorea(error));
            }
    }
}
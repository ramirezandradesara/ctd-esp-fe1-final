import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import Personajes from "../types/personajes.types";
import { IRootState } from "../store/store";
import { getPersonajesHome } from "../service/getPersonajes";



interface ComenzarDescargarPersonajes extends Action {
    type: "DESCARGA_INICIAL_PERSONAJES",
}; // ✅

interface DescargaPersonajesExitosa extends Action {
    type: "DESCARGA_EXITOSA_PERSONAJES",
    payload: {
        personajes: Personajes[]
    }
}; // ✅

interface DescargaPersonajesErrorea extends Action {
    type: "DESCARGA_ERRONEA_PERSONAJES",
    payload: {
        error: string // ✅
    }
};


export type PersonajesActions =
    | ComenzarDescargarPersonajes
    | DescargaPersonajesErrorea
    | DescargaPersonajesExitosa; // ✅



export const comenzarDescargarPersonajes: ActionCreator<ComenzarDescargarPersonajes> = () => {
    return {
        type: "DESCARGA_INICIAL_PERSONAJES",
        isLoading: true,
    }
};

export const descargaPersonajesExitosa: ActionCreator<DescargaPersonajesExitosa> = (personajes: Personajes[]) => {
    return {
        type: "DESCARGA_EXITOSA_PERSONAJES",
        isLoading: false,
        payload: {
            personajes
        }
        // personajes: personajes // podemos poner solo porque gracias a EcM6 si se llama igual no hace falta 
    }
};

export const descargaPersonajesErrorea: ActionCreator<DescargaPersonajesErrorea> = (error: string) => {
    return {
        type: "DESCARGA_ERRONEA_PERSONAJES",
        isLoading: false,
        payload: {
            error: error
        }
        // error: error
    }
};


// thunk

export interface BusquedaPersonajes extends ThunkAction<void, IRootState, unknown, PersonajesActions> { } // ✅

const MINIMUM_CHARS_TO_SEARCH = 1;

export const busquedaPersonajes = (name: string): BusquedaPersonajes => {
    return async (dispatch, getState) => {
        if(name && name.length < MINIMUM_CHARS_TO_SEARCH) {return null};
        dispatch(comenzarDescargarPersonajes());
        try {
            const personajes = await getPersonajesHome(name);
            // const personajes = await getPersonajeFiltrado(name);
            // const personajes = await getPersonajeFiltrado2(name);
            dispatch(descargaPersonajesExitosa(personajes));
        } catch (error) {
            dispatch(descargaPersonajesErrorea(error));
        }
    }
}


import { Reducer } from "@reduxjs/toolkit";
import { PersonajesActions } from "../actions/personajesActions";
import Personajes from "../types/personajes.types";

export interface InitialState  {
    busqueda: string;
    personajes: Personajes [];
    status: "CARGANDO" | "COMPLETADO" | "COMPLETADO_CON_ERROR";
    error: string | null;
    apiInfo: {
        count: number;
        next: string;
        pages: number;
        prev: string;
    };
}

const initialState: InitialState  = {
    busqueda: "",
    personajes: [],
    status: "COMPLETADO",
    error: null,
    apiInfo: {
        count: 0,
        next: "",
        pages: 0,
        prev: "",
    },
};

// componente
const personajesReducer: Reducer<InitialState , PersonajesActions> = (
    state = initialState,
    action
): InitialState  => {
    switch (action.type) {
        // case "BUSCAR_PERSONAJES":
        case "DESCARGA_INICIAL_PERSONAJES":
            return {
                ...state,
                status: "CARGANDO",
                error: null,
            };
        case "DESCARGA_EXITOSA_PERSONAJES":
            return {
                ...state,
                status: "COMPLETADO",
                personajes: [...action.payload.personajes],
                // personajes: action.data.results,
                // apiInfo: action.data.info,
            };
        case "DESCARGA_ERRONEA_PERSONAJES":
            return {
                ...state,
                status: "COMPLETADO_CON_ERROR",
                personajes: [], //opcional
                error: action.payload.error,
            };


        /*case "LIMPIAR_FILTRO":
            return {
                ...state,
                busqueda: "",
            };
        case "FILTRAR_PERSONAJES":
            return {
                ...state,
                busqueda: action.name,
            };*/

        default:
            return state;
    }
};

export default personajesReducer;
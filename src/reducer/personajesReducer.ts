import { Reducer } from "@reduxjs/toolkit";
import { PersonajesActions } from "../actions/personajesActions";
import Personajes from "../types/personajes.types";

export interface InitialState {
    personajeFiltrado: string;
    personajes: Personajes[];
    isLoading: boolean,
    status: "CARGANDO" | "COMPLETADO" | "COMPLETADO_CON_ERROR";
    error: string | null;
    apiInfo: {
        count: number;
        next: string;
        pages: number;
        prev: string;
    };
}

const initialState: InitialState = {
    personajeFiltrado: "",
    personajes: [],
    isLoading: true,
    status: "COMPLETADO",
    error: null,
    apiInfo: {
        count: 0,
        next: "",
        pages: 0,
        prev: "",
    },
};


const personajesReducer: Reducer<InitialState, PersonajesActions> = (
    state = initialState, action): InitialState => {
    switch (action.type) {

        case "DESCARGA_INICIAL_PERSONAJES":
            return {
                ...state,
                // status: "CARGANDO",
                isLoading: true
            };

        case "DESCARGA_EXITOSA_PERSONAJES":
            return {
                ...state,
                // status: "COMPLETADO",
                isLoading: false,
                personajes: [...action.data.results],
                apiInfo: action.data.info
            };

        case "DESCARGA_ERRONEA_PERSONAJES":
            return {
                ...state,
                isLoading: false,
                // status: "COMPLETADO_CON_ERROR",
                personajes: [],
                error: action.payload.error,
            };


        case "LIMPIAR_FILTRO":
            return {
                ...state,
                personajeFiltrado: "",
            };

        case "FILTRAR_PERSONAJES":
            return {
                ...state,
                personajeFiltrado: action.personajeFiltrado,
            };

        default:
            return state;
    }
};

export default personajesReducer;
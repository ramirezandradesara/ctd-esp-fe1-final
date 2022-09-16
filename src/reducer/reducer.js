const initialState = {
    page: 0,
    isLoading: true,
    personajes: [],
    error: null,
    busqueda: '',
    apiInfo: {
        count: 0,
        next: '',
        pages: 0,
        prev: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "DESCARGA_INICIAL_PERSONAJES": {
            return {
                ...state,
                isLoading: true
            }
        };

        case "DESCARGA_EXITOSA_PERSONAJES": {
            return {
                ...state,
                isLoading: false,
                personajes: [...action.personajes], // llenando la info
                error: null,
                // personajes: [...action.payload.personajes] // llenando la info
            }
        };

        case "DESCARGA_ERRONEA_PERSONAJES": {
            return {
                ...state,
                isLoading: false,
                personajes: [],
                error: action.payload
                // error: action.payload.error
            }
        };

        case "LIMPIAR_FILTRO":
            return {
                ...state,
                busqueda: ''
            }
        case "FILTRAR_PERSONAJES":
            return {
                ...state,
                busqueda: action.name
            }

        default:
            return state;
    };
};
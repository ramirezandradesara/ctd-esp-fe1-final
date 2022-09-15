const initialState = {
    page: 0,
    isLoading: true,
    personajes: [],
    error: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case "DESCARGA_INICIAL_PERSONAJES":{
            return{
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

        case "DESCARGA_ERRONEA_PERSONAJES":{
            return{
                ...state,
                isLoading: false,
                personajes: [],
                error: action.payload
                // error: action.payload.error
            }
        };

        default:
            return state;
    };
};
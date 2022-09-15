import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { busquedaPersonajes, comenzarDescargarPokemones, descargaPersonajesErrorea, descargaPersonajesExitosa } from '../../actions/actions';
import { getPersonajesHome } from '../../servicess/getPersonajesHome';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const [nextPage, setNextPage] = useState(0);

    const personajesHome = useSelector((state) => state);
    console.log("PERSONAJES" + personajesHome);


    const dispatch = useDispatch();

    const getData = async () => {
        dispatch(comenzarDescargarPokemones());
        try {
            const personajes = await getPersonajesHome(nextPage);
            dispatch(descargaPersonajesExitosa(personajes));
        } catch (error) {
            dispatch(descargaPersonajesErrorea(error));
        }
    };


    useEffect(() => {
        getData();
        dispatch(busquedaPersonajes(nextPage))
    }, [nextPage])

    return <div className="grilla-personajes">
        {/* <TarjetaPersonaje />
        <TarjetaPersonaje />
        <TarjetaPersonaje /> */}


    </div>
}

export default GrillaPersonajes;
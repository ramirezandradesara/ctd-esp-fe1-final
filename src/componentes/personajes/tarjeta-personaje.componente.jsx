import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { busquedaPersonajes } from '../../actions/actions';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = () => {

    const [nextPage, setNextPage] = useState(0);

    const personajesHome = useSelector((state) => state.personajes.personajes);
    console.log(personajesHome);


    const dispatch = useDispatch();

    // const getData = async () => {
    //     dispatch(comenzarDescargarPokemones());
    //     try {
    //         const personajes = await getPersonajesHome(nextPage);
    //         dispatch(descargaPersonajesExitosa(personajes));
    //     } catch (error) {
    //         dispatch(descargaPersonajesErrorea(error));
    //     }
    // };


    useEffect(() => {
        // getData();
        dispatch(busquedaPersonajes(nextPage))
    }, [nextPage])

    return <div className="tarjeta-personaje">
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"/>
        <div className="tarjeta-personaje-body">
            <span>Rick Sanchez</span>
            <BotonFavorito esFavorito={false} />
        </div>
    </div>
}

export default TarjetaPersonaje;
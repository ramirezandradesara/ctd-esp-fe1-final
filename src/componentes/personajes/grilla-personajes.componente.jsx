import { useDispatch, useSelector } from 'react-redux';
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

    const personajesHome = useSelector((state) => state.personajes.personajes);


    const dispatch = useDispatch();


    return <div className="grilla-personajes">

        {personajesHome.map(personaje => (
            <TarjetaPersonaje
                personaje={personaje}
            />
        ))}

    </div>
}

export default GrillaPersonajes;
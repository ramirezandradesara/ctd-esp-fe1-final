import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { IRootState } from '../../store/store';
import { useDispatch, TypedUseSelectorHook, useSelector as useReduxSelector  } from 'react-redux';
import { FC } from 'react';
import Personajes from '../../types/personajes.types';

/**
 * Componente que renderiza la grilla de personajes para la página de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns {JSX element} 
 */



const GrillaPersonajes: FC = (): JSX.Element => {

    const personajesHome: Personajes[] = useSelector((state) => state.personajes.personajes);

    return <div className="grilla-personajes">

        {personajesHome.map(personaje => (
            <TarjetaPersonaje
                personaje={personaje}
            />
        ))}

    </div>
}

export default GrillaPersonajes;
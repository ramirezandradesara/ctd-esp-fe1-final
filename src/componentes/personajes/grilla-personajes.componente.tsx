import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { IRootState } from '../../store/store';
import { useDispatch, TypedUseSelectorHook } from 'react-redux';
import { FC, useEffect, useState } from 'react';
import Personajes from '../../types/personajes.types';
import { busquedaPersonajes } from '../../actions/personajesActions';
import { useSelector } from '../../helpers/useSelector';

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
                id={personaje.id}
                name={personaje.name}
                image={personaje.image}
                episode={personaje.episode}
            />
        ))}

    </div>
}

export default GrillaPersonajes;
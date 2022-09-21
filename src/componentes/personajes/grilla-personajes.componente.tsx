import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { IRootState } from '../../store/store';
import { useDispatch, TypedUseSelectorHook } from 'react-redux';
import { FC, useEffect, useState } from 'react';
import Personajes from '../../types/personajes.types';
import { busquedaPersonajes } from '../../actions/personajesActions';
import { useSelector } from '../../store/store';

/**
 * Componente que renderiza la grilla de personajes para la página de inicio
 * 
 * @author Sara Ramírez 
 * @returns {JSX element} 
 */

const GrillaPersonajes: FC = (): JSX.Element => {

    const personajesHome: Personajes[] = useSelector((state) => state.personajes.personajes);
    const isLoading = useSelector((state) => state.personajes.isLoading)

    return <div className="grilla-personajes">

        {isLoading
            ? <h4>Cargando personajes...</h4>
            : personajesHome.map(personaje => (
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
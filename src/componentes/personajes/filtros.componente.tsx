import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { busquedaPersonajes, filtrarPersonajes, limpiarFiltro } from '../../actions/personajesActions';
import { useSelector } from '../../store/store';
import './filtros.css';

/**
 * 
 * @returns {JSX element} 
 */

const Filtros: FC = (): JSX.Element => {

    const dispatch = useDispatch();

    const personajeFiltrado = useSelector((state) => state.personajes.personajeFiltrado)


    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input
            type="text"
            onChange={(e) => {
                dispatch(busquedaPersonajes(e.target.value));
                dispatch(filtrarPersonajes(e.target.value));
            }}
            placeholder="Rick, Morty, Beth, Alien, ...etc"
            value={personajeFiltrado}
            name="nombre" />
    </div>
}

export default Filtros;
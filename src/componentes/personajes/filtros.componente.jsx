import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { busquedaPersonajes } from '../../actions/actions';
import './filtros.css';

const Filtros = () => {

    const dispatch = useDispatch();

    const [pagina, setPagina] = useState(0);

    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input 
        type="text" 
        onChange={(e)=>  dispatch(busquedaPersonajes(e.target.value))}
        placeholder="Rick, Morty, Beth, Alien, ...etc" 
        name="nombre" />
    </div>
}

export default Filtros;
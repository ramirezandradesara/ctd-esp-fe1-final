import './paginacion.css';
import { TypedUseSelectorHook, useSelector as useReduxSelector, useDispatch } from 'react-redux';
import { IRootState, useSelector } from '../../store/store';
import { busquedaPersonajes } from '../../actions/personajesActions';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns {JSX element} 
 */

const Paginacion = () : JSX.Element  => {
    const { apiInfo } = useSelector((state) => state.personajes);
    const dispatch = useDispatch();
 
    const prevPage = apiInfo?.prev?.split("?")[1] 
    const nextPage = apiInfo?.next?.split("?")[1]

    return (
      <div className="paginacion">
        <button
          disabled={prevPage === undefined ? true : false}
          onClick={() => dispatch(busquedaPersonajes(prevPage))}
          className={"primary"}
        >
          Anterior
        </button>
        <button
          disabled={nextPage === undefined ? true : false}
          onClick={() => dispatch(busquedaPersonajes(nextPage))}
          className={"primary"}
        >
          Siguiente
        </button>
      </div>
    );
}

export default Paginacion;
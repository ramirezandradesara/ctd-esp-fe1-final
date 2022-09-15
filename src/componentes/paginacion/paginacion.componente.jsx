import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { busquedaPersonajes } from '../../actions/actions';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const [pagina, setPagina] = useState(0);


    const personajesHome = useSelector((state) => state.personajes.personajes);
    const load = useSelector((state) => state.personajes.isLoading)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(busquedaPersonajes(pagina))
    }, [pagina])

    return <div className="paginacion">

        {load && <h1 className='text-white'>Loading...</h1>}
        {personajesHome &&
            <>
                <button
                    // disabled={true}
                    className={"primary"}
                    onClick={() => setPagina(prev => prev - 1)}
                    disabled={pagina === 0 ? true : false}
                >
                    Anterior
                </button>

                <button
                    disabled={false}
                    className={"primary"}
                    onClick={() => setPagina(prev => prev + 1)}
                >Siguiente</button>
            </>
        }
    </div>
}

export default Paginacion;
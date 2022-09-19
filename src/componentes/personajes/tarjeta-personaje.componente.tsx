import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Personajes from '../../types/personajes.types';
import { useSelector } from '../../helpers/useSelector';
import { agregarFavorito, eliminarFavorito } from '../../actions/favoritosActions';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns {JSX element} 
 */


const TarjetaPersonaje = ({ id, name, image, episode }: Personajes): JSX.Element => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const favoritos = useSelector((state) => state.favoritos.favoritos);

    const esFavorito = favoritos.find(fav => fav.id === id);
    console.log("🚀 ~ file: tarjeta-personaje.componente.tsx ~ line 27 ~ TarjetaPersonaje ~ esFavorito", esFavorito)

    const agregarFav = () => {
        !esFavorito
            ? dispatch(agregarFavorito({ id, name, image }))
            : dispatch(eliminarFavorito({ id, name, image }))
    };

    


    return <div className="tarjeta-personaje">
        <img src={image} alt={name} />
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito esFavorito={esFavorito} agregarFav={agregarFav}/>
        </div>
    </div>
}

export default TarjetaPersonaje;
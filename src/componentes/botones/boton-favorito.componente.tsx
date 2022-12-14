import { BotonFavoritoInterface } from '../../types/boton-favorito-types';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @author Sara Ramírez 
 * @param {object | undefined} esFavorito
 * @param {Function} agregarFav
 * @returns {JSX.Element}
 */

const BotonFavorito = ({esFavorito, agregarFav}: BotonFavoritoInterface): JSX.Element => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={agregarFav}/>
    </div>
}

export default BotonFavorito;
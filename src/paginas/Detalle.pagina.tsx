import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { agregarFavorito, eliminarFavorito } from "../actions/favoritosActions";
import Personajes from "../types/personajes.types";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * @author Sara Ramírez 
 * @returns {JSX element} 
 */
const PaginaDetalle = ({ id, name, image, episode }: Personajes): JSX.Element => {

    const dispatch = useDispatch();

    const favoritos = useSelector((state) => state.favoritos.favoritos);
    const esFavorito = favoritos.find(fav => fav.id === id);

    /**
     * Función que en caso que el personaje no se encuentre en Favoritos, al clickear despacha la acción para agregarlo. 
     * Si ya se encuentra en favoritos, al volver a clickear se elimina.
     */
    const agregarFav = () => {
        !esFavorito
            ? dispatch(agregarFavorito({ id, name, image }))
            : dispatch(eliminarFavorito({ id, name, image }))
    };

    return <div className="container">
        <h3>Rick Sanchez</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />
                <div className={"detalle-header-texto"}>

                    <p>Rick Sanchez</p>
                    <p>Planeta: Earth</p>
                    <p>Genero: Male</p>
                </div>
                <BotonFavorito esFavorito={esFavorito} agregarFav={agregarFav} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            <TarjetaEpisodio />
            <TarjetaEpisodio />
            <TarjetaEpisodio />
        </div>
    </div>
}

export default PaginaDetalle
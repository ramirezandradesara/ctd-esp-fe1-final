import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useSelector } from "../helpers/useSelector";
import Personajes from "../types/personajes.types";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const favoritos = useSelector((state) => state.favoritos.favoritos)

    return (
        <div className="container">
            <div className="actions">
                <h3>Personajes Favoritos</h3>
                <button className="danger">Test Button</button>
            </div>

            <div className="grilla-personajes">

                {favoritos.map(favorito => (
                    <TarjetaPersonaje
                        id={favorito.id}
                        name={favorito.name}
                        image={favorito.image}
                        episode={favorito.episode}
                    />
                ))}

            </div>
        </div>
    )
}

export default PaginaFavoritos
import { Fragment, useContext } from "react";
import '../styles/content.css'
import { PokedexContext } from "../store/store";

const Card = () => {
    const pokemon = useContext(PokedexContext);

    return (
        <Fragment>
            {pokemon.map(item => {
                let pokename = item.name
                return (
                    <div key={item.id} className="card">
                        <div className="image" key={item.name} >
                            <a href={`/${pokename}`}>
                                <img src={item.sprites.other.dream_world.front_default} />
                            </a>
                            <div className="infos">
                                <h2>{`ID ${item.id}`}</h2>
                                <h3>{item.name.toUpperCase()}</h3>
                            </div>

                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default Card
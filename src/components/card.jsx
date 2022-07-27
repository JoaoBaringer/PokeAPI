import { Fragment, useContext, useState } from "react";
import '../styles/card.css'
import { PokedexContext } from "../store/store";

const Card = () => {
    const pokemon = useContext(PokedexContext);
    const [current, setCurrent] = useState(0)
    const size = pokemon.lenght - 1

    const nextSlide = () => {
        setCurrent(current !== size ? current + 1 : 0)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? size : current - 1)
    }

    const redirects = (pokename) => {

    }


    return (
        <Fragment>
            {pokemon.map(item => {
                let pokename = item.name
                return (
                    <div key={item.id} className="card">
                        <div className="image">
                            <a href={`/${pokename}`}><img src={item.sprites.other.dream_world.front_default} /></a>
                        </div>
                        <div className="infos">
                            <h2>{`ID ${item.id}`}</h2>
                            <h3>{item.name.toUpperCase()}</h3>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}

export default Card
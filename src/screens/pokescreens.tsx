import React, { Fragment, useEffect, useState } from "react";
import '../styles/pokeinfos.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import '../styles/pokeinfos.css'


const PokeScreen = () => {
    const [infos, setinfos] = useState<any>()
    let { id } = useParams();

    useEffect(() => {
        getPokeStatus(id);
    }, [infos])

    async function getPokeStatus(pokename: any) {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
        setinfos(data)
    }

    if (infos) {
        return (
            <div className="card-infos">
                <h1><a href="/">Back</a></h1>

                <div className="image-card">
                    <img src={infos.sprites.other.dream_world.front_default} />
                </div>

                <div className="status">
                    <div className="card-status">
                        <h2>Name : {infos.name.toUpperCase()}</h2>
                        <h2>Height : {infos.height}</h2>
                        <h2>Weight: {infos.weight}</h2>
                    </div>
                    <div className="card-status">
                        <h2>Skills</h2>
                        <span>{infos.abilities[0].ability.name.toUpperCase()}</span>
                        <span>{infos.abilities[1].ability.name.toUpperCase()}</span>
                        <h2>Experience {infos.base_experience}</h2>
                    </div>
                    <div className="card-status">
                        <h2>Moves</h2>
                        <span>{infos.moves[0].move.name.toUpperCase()}</span>
                        <span>{infos.moves[1].move.name.toUpperCase()}</span>
                        <span>{infos.moves[2].move.name.toUpperCase()}</span>
                        <span>{infos.moves[3].move.name.toUpperCase()}</span>
                        <span>{infos.moves[4].move.name.toUpperCase()}</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default PokeScreen
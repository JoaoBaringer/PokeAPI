import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {UserContextProps } from './interfaces';

export const PokedexContext = createContext<any>({});

const Context = ({ children }: UserContextProps) => {
    const [allObject, setObject] = useState<any>([]);
    
    const GetPokemons = async () => {
        const res = await axios(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=15`);
        const data = await res.data.results;
        getPokeInfo(data);
    }

    const getPokeInfo = async (r: any) => {
        r.forEach((item: any) => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
            .then((d: any) => setObject((currentlist: any) => [...currentlist, d.data]))
        })
    }

    useEffect(() =>{
        GetPokemons()
    }, [])

    return (
        <PokedexContext.Provider value={allObject}>
            {children}
        </PokedexContext.Provider >
    )
}


export default Context
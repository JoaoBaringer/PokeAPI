import React, { ReactNode } from "react";
export type UserContextProps = {
    children: ReactNode;
}

export interface Pokemons {
    forEach(argv: any): any;
    name: string
    url: string
}

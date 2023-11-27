import { useState, useEffect } from "react";
import SetCards from "./setCards";
class PokeSet{
    constructor(diff){
        this.pokeSet= [];
        this.generatePokeSet(diff)
    }
    async PokeCard(card){

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${card.id}`);
        const { name, sprites } = await res.json();
        const image = sprites[card.nShiny ? "front_shiny" : "front_default"];
        return { name, image, id:card.id, nShiny:card.nShiny };
            
    }

    async generatePokeSet(diff) {
        const standPokeSet = [];
        const setCard = new SetCards(diff);
        for (let i = 0; i < setCard.set.length; i++) {
            const pokeCard = await this.PokeCard(setCard.set[i]);
            standPokeSet.push(pokeCard);
        }
        this.pokeSet = standPokeSet;
    }
}

export default PokeSet;
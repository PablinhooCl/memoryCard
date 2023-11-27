import React, {useState, useEffect} from "react";

function ShuffleArray(pokeSet,setPokeSet) {
    const shuffledSet = [...pokeSet]; 
        for (let i = shuffledSet.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledSet[i], shuffledSet[j]] = [shuffledSet[j], shuffledSet[i]];
        }
        setPokeSet(shuffledSet); 
  }

export default ShuffleArray
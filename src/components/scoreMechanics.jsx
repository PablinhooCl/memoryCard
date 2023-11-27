import React, {useState, useEffect} from "react";

const ScoreMechanics= ({pokeSet, setPokeSet, score, setScore, index, cardChecker, setCardChecker}) =>{    
     
        const pokeId = pokeSet[index].id;
        
        if (cardChecker.includes(pokeId)) {
          setCardChecker([]);
          setScore(0);
        } else {
          setCardChecker([...cardChecker, pokeId]);
          setScore(score + 1);
        }
    
}

export default ScoreMechanics
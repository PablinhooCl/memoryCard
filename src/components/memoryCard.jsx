import { useState, useEffect } from 'react';
import PokeSet from './pokeSet';
import ShuffleArray from './shuffleMecha'
import ScoreMechanics from './scoreMechanics';
import './memoryCard.css'

const MemoryCard = ({ diff, score, setScore, cardChecker, setCardChecker  }) => {
    const [pokeSet, setPokeSet] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const generateCards = async () => {
            setIsLoading(true);
            try {
                const pokeSetInstance = new PokeSet(diff);
                await pokeSetInstance.generatePokeSet(diff);
                setPokeSet(pokeSetInstance.pokeSet);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        generateCards();
    }, [diff]);

    if (isLoading) {
        return <div>Loading...</div>; 
    }
    function cardClicker(index, score, setScore, cardChecker, setCardChecker){
        const shuffleArray= ShuffleArray(pokeSet, setPokeSet);
        const scoreMechanics= ScoreMechanics({pokeSet, setPokeSet, score, setScore, index, cardChecker, setCardChecker});
    }

    return (
        <>
            {pokeSet.map((pokeCard, index) => (
                <div key={index} className='pokeCard' onClick={() => 
                    cardClicker(index, score, setScore, cardChecker, setCardChecker)
                }>
                    <img src={pokeCard.image} alt={pokeCard.name} />
                </div>
            ))}
        </>
    );
};

export default MemoryCard
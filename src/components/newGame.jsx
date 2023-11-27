import React, { useState, useEffect } from 'react';
import MemoryCard from './memoryCard';

const NewGame = ({ setDiff, diff, gameCurrent, setGameCurrent, score, setScore, cardChecker, setCardChecker }) => {
  const [newDiffi, setNewDiffi] = useState(null);

  useEffect(() => {
    if (gameCurrent) {
      if (diff === 'Easy') setNewDiffi(12);
      else if (diff === 'Medium') setNewDiffi(18);
      else if (diff === 'Hard') setNewDiffi(24);
    }
  }, [gameCurrent, diff]);
  
  return (
    <>
      {gameCurrent && newDiffi !== null && 
      <MemoryCard diff={newDiffi} score={score} setScore={setScore} cardChecker= {cardChecker} setCardChecker= {setCardChecker} />
      }
    </>
  );
};

export default NewGame;
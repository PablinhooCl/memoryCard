import React, { useState } from 'react';


const SelectedDifficulty = ({ setDiff, diff, gameCurrent, setGameCurrent }) => {
    const difficulties = ['Easy', 'Medium', 'Hard'];
  
    const handleDifficultyChange = (e) => {
      setDiff(e.target.value);
    };
  
    return (
      <div>
        <select onChange={handleDifficultyChange} value={diff}>
          {difficulties.map((difficulty, index) => (
            <option key={index} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
        <button onClick={() => setGameCurrent(true)}>Start</button>
      </div>
    );
  };
  
  export default SelectedDifficulty;
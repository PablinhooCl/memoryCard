import React, {useState} from 'react';
import NewGame from './components/newGame';
import SelectedDifficulty from './components/selectDifiiculty';

import './App.css';


function App() {
const [ gameCurrent, setGameCurrent ]= useState(false)
const [diff, setDiff] = useState('Easy');
const [score, setScore] = useState(0);
const [cardChecker, setCardChecker]= useState(['']);

return (
  <>
    <header>
      <SelectedDifficulty
        setDiff={setDiff}
        diff={diff}
        gameCurrent={gameCurrent}
        setGameCurrent={setGameCurrent}
      />
    </header>
    <div className="content">
      <NewGame
        setDiff={setDiff}
        diff={diff}
        gameCurrent={gameCurrent}
        setGameCurrent={setGameCurrent}
        score={score}
        setScore={setScore}
        cardChecker= {cardChecker}
        setCardChecker= {setCardChecker}
      />
      <div className="score"><p>Score: {score}</p></div>
    </div>
  </>
);
}

export default App;
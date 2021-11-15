import { useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import GameScoreHeader from './components/Game/GameScoreHeader';
import SelectionTriangle from './components/Game/SelectionTriangle';
import RulesButton from './components/Game/RulesButton';
import RulesModal from './components/Game/RulesModal';
import Stage from './components/Game/Stage';

function App() {
  // modal function
  const [isModalOpen, setIsModalOpen] = useState(false);

  // modal window toggle - controlled by rules button
  const modalAppear = function () {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };

  // modal portal for better ally
  const modal = ReactDOM.createPortal(
    <RulesModal modalControls={modalAppear} />,
    document.getElementById('rules-modal')
  );

  //handling user click game option
  const [playerSelection, setPlayerSelection] = useState('');

  //score logic
  const [score, setScore] = useState(0);
  const scoreKeeper = (result) => {
    // guard clause for a tie in game
    if (typeof result === 'string') return;

    result ? setScore((prev) => prev + 1) : setScore((prev) => prev);
  };

  const gameReset = function () {
    setPlayerSelection('');
    setRulesButtonStyle('stage');
  };

  // rules button style change
  const [rulesButtonStyle, setRulesButtonStyle] = useState('stage');
  const rulesButtonStyleHandler = function () {
    setRulesButtonStyle('winLose');
  };

  return (
    <main>
      <GameScoreHeader score={score} />
      {playerSelection === '' ? (
        <SelectionTriangle
          playerSelectionSetFunction={(selection) => {
            setPlayerSelection(selection);
          }}
        />
      ) : (
        <Stage
          playerSelection={playerSelection}
          onPlayAgain={gameReset}
          scoreKeeper={scoreKeeper}
          rulesButtonMarginControlHandler={rulesButtonStyleHandler}
        />
      )}
      <RulesButton
        onClick={modalAppear}
        marginControl={rulesButtonStyle}
        playerSelection={playerSelection}
      />
      {isModalOpen && modal}
    </main>
  );
}

export default App;

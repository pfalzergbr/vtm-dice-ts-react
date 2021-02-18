import React from 'react';
import Header from './components/Header';
import RollOptions from './components/RollOptions';
import DiceField from './components/DiceField';
import MessageBox from './components/MessageBox';

import { useDice } from './hooks/useDice';
import { useStepper } from './hooks/useStepper';
import './App.css';

function App() {
  const {
    count: regularDice,
    increaseCount: increaseRegularDice,
    decreaseCount: decreaseRegularDice,
  } = useStepper(1, 15);
  const {
    count: hungerDice,
    increaseCount: increaseHungerDice,
    decreaseCount: decreaseHungerDice,
  } = useStepper(0, 5);
  const { rollResult, rollDice, resultDescription } = useDice();

  const handleRoll = () => {
    rollDice(regularDice, hungerDice);
  };


  return (
    <div className='App'>
      <Header />
      <RollOptions
        increaseRegularDice={increaseRegularDice}
        decreaseRegularDice={decreaseRegularDice}
        increaseHungerDice={increaseHungerDice}
        decreaseHungerDice={decreaseHungerDice}
        regularDice={regularDice}
        hungerDice={hungerDice}
        handleRoll={handleRoll}
      />
      <DiceField rollResult={rollResult} />
      <MessageBox resultDescription={resultDescription}/>
    </div>
  );
}

export default App;

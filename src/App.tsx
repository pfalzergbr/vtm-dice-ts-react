import React from 'react';
import Header from './components/Header';
import RollOptions from './components/RollOptions';
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

  const roll = () => {

  }

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
      />
    </div>
  );
}

export default App;

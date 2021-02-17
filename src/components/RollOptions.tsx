import React from 'react';
import Stepper from './Stepper';
import './styles/RollOptions.css';

interface Props {
  increaseRegularDice: () => void;
  decreaseRegularDice: () => void;
  increaseHungerDice: () => void;
  decreaseHungerDice: () => void;
  regularDice: number;
  hungerDice: number;
}

function RollOptions(props: Props) {
  const {
    increaseRegularDice,
    increaseHungerDice,
    decreaseHungerDice,
    decreaseRegularDice,
    regularDice,
    hungerDice,
  } = props;

  return (
    <section className='setup-area'>
      <div className='counter-container'>
        <Stepper
          fieldName='Dicepool'
          increase={increaseRegularDice}
          decrease={decreaseRegularDice}
          count={regularDice}
        />
        <Stepper
          fieldName='Hunger'
          increase={increaseHungerDice}
          decrease={decreaseHungerDice}
          count={hungerDice}
        />
        <button className='btn'>Roll</button>
      </div>
    </section>
  );
}

export default RollOptions;

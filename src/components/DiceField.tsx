import React from 'react';

import { Dice } from '../hooks/useDice';
import './styles/DiceField.css';

interface Props { regularDiceResult: Dice[], hungerDiceResult: Dice[]}

function DiceField(props: Props) {
  const {} = props;

  return (
    <section className='diceroll-area'>
      <div className='dicebox'></div>
    </section>
  );
}

export default DiceField;

import React from 'react';

import { Dice } from '../hooks/useDice';
import './styles/DiceField.css';

interface Props { rollResult: Dice[],}

function DiceField(props: Props) {
  const {} = props;

  return (
    <section className='diceroll-area'>
      <div className='dicebox'></div>
    </section>
  );
}

export default DiceField;

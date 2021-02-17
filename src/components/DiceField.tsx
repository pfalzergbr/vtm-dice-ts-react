import React from 'react';

import { Dice } from '../diceEngine/diceTypes';
import DiceElement from './DiceElement';
import './styles/DiceField.css';

interface Props { rollResult: Dice[],}

function DiceField(props: Props) {
  const {rollResult} = props;

  return (
    <section className='diceroll-area'>
      <div className='dicebox'>
        {rollResult && rollResult.map((dice, index) => <DiceElement key={index} dice={dice} />)}
      </div>
    </section>
  );
}

export default DiceField;

import { useState } from 'react';
import { Dice, ResultMessage } from '../diceEngine/diceTypes';
import {
  handleRollDice
} from '../diceEngine/diceEngine';


export const useDice = (): {
  rollResult: Dice[];
  rollDice: (dicePool: number, hungerLevel: number) => void;
} => {
  const [rollResult, setRollResult] = useState<Dice[]>([]);
  const [resultDescription, setResultDescription] = useState<ResultMessage>({
    result: 'pending',
    message: '',
  });

  const rollDice = (dicePool: number, hungerLevel: number) => {
    const {rollResult, finalResult} = handleRollDice(dicePool, hungerLevel);
    setRollResult(rollResult);
    // setResultDescription(finalResult)
  
  };

  return { rollDice, rollResult };
};

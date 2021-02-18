import { useState } from 'react';
import { Dice, ResultMessage } from '../diceEngine/diceTypes';
import {
  handleRollDice
} from '../diceEngine/handleRollDice';


export const useDice = (): {
  rollResult: Dice[];
  rollDice: (dicePool: number, hungerLevel: number) => void;
  resultDescription: ResultMessage
} => {
  const [rollResult, setRollResult] = useState<Dice[]>([]);
  const [resultDescription, setResultDescription] = useState<ResultMessage>({
    result: 'pending',
    message: '',
  });

  const rollDice = (dicePool: number, hungerLevel: number) => {
    const {rollResult, resultMessage} = handleRollDice(dicePool, hungerLevel);
    setRollResult(rollResult);
    setResultDescription(resultMessage)
  
  };

  return { rollDice, rollResult, resultDescription };
};

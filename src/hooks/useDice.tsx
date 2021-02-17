import { useState } from 'react';
import { Dice, ResultMessage } from '../diceEngine/diceTypes';
import {
  generateRoll,
  evaluateRoll,
  calcDicePool,
  hungerDiceMap,
  regularDiceMap,
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
    const { regularDiceNum, hungerDiceNum } = calcDicePool(
      dicePool,
      hungerLevel
    );

    const regularRoll = generateRoll(regularDiceNum, regularDiceMap, 'regular');
    const hungerRoll = generateRoll(hungerDiceNum, hungerDiceMap, 'hunger');
    const rollResult = [...regularRoll, ...hungerRoll];
    evaluateRoll(rollResult);
    setRollResult(rollResult);
  };

  return { rollDice, rollResult };
};

import { DiceMap, Dice } from './diceTypes';
import { generateRoll } from './generateRoll';
import { calcDicePool } from './diceUtils';
import { evaluateRoll } from './evaluateRoll';
import { createFinalResult } from './createFinalResult';
import { createMessage } from './createMessage';

import { FinalResult } from './diceTypes';

export const regularDiceMap: DiceMap = [
  'criticalSuccess',
  'fail',
  'fail',
  'fail',
  'fail',
  'fail',
  'success',
  'success',
  'success',
  'success',
];

export const hungerDiceMap: DiceMap = [
  'hungerCriticalSuccess',
  'criticalFail',
  'fail',
  'fail',
  'fail',
  'fail',
  'success',
  'success',
  'success',
  'success',
];

export const handleRollDice = (
  dicePool: number,
  hungerLevel: number
): { rollResult: Dice[]; finalResult: FinalResult } => {
  const { regularDiceNum, hungerDiceNum } = calcDicePool(dicePool, hungerLevel);
  const regularRoll = generateRoll(regularDiceNum, regularDiceMap, 'regular');
  const hungerRoll = generateRoll(hungerDiceNum, hungerDiceMap, 'hunger');
  const rollResult = [...regularRoll, ...hungerRoll];
  const resultDescription = evaluateRoll(rollResult);
  const finalResult = createFinalResult(resultDescription);
  return { rollResult, finalResult };
};

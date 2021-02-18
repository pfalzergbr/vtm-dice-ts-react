import { DiceMap, Dice, ResultMessage } from './diceTypes';
import { generateRoll } from './generateRoll';
import { calcDicePool } from './diceUtils';
import { evaluateRoll } from './evaluateRoll';
import { createFinalResult } from './createFinalResult';
import { createMessage } from './createMessage';

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
): { rollResult: Dice[]; resultMessage: ResultMessage } => {
  const { regularDiceNum, hungerDiceNum } = calcDicePool(dicePool, hungerLevel);
  const regularRoll = generateRoll(regularDiceNum, regularDiceMap, 'regular');
  const hungerRoll = generateRoll(hungerDiceNum, hungerDiceMap, 'hunger');
  const rollResult = [...regularRoll, ...hungerRoll];
  const resultCount = evaluateRoll(rollResult);
  const finalResult = createFinalResult(resultCount);
  const resultMessage = createMessage(resultCount, finalResult);
  return { rollResult, resultMessage };
};

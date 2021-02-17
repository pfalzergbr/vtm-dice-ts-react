import {
  DiceMap,
  DiceType,
  Dice,
  RollResult,
  FinalResult,
  ResultCount,
  ResultMessage,
} from './diceTypes';

import {generateRandomDice} from './diceUtils'

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



export const generateRoll = (
  diceNum: number,
  diceMap: DiceMap,
  type: DiceType
): Dice[] => {
  const rollArray: Dice[] = [];

  for (let i = 0; i < diceNum; i++) {
    const rolledDice = generateRandomDice(diceMap, type);
    rollArray.push(rolledDice);
  }

  return rollArray;
};

export const calcDicePool = (
  dicePool: number,
  hungerLevel: number
): {
  regularDiceNum: number;
  hungerDiceNum: number;
} => {
  const regularDiceNum = dicePool > hungerLevel ? dicePool - hungerLevel : 0;

  const hungerDiceNum = dicePool > hungerLevel ? hungerLevel : dicePool;

  return {
    regularDiceNum,
    hungerDiceNum,
  };
};

export const evaluateRoll = (rollResult: Dice[]): ResultCount => {
  const results: ResultCount = {
    totalSuccess: 0,
    hungerCriticalSuccess: 0,
    criticalSuccess: 0,
    extraCritical: 0,
    criticalFail: 0,
    success: 0,
    fail: 0,
  };

  rollResult.forEach((dice) => {
    results[dice.result]++;
  });

  results.extraCritical =
    Math.floor((results.criticalSuccess + results.hungerCriticalSuccess) / 2) *
    2;
  results.totalSuccess =
    results.success +
    results.criticalSuccess +
    results.hungerCriticalSuccess +
    results.extraCritical;

  return results;
};

export const createMessage = (resultCount: ResultCount): FinalResult => {
  if (resultCount.totalSuccess === 0 && resultCount.criticalFail >= 1)
    return 'bestialFail';
  if (resultCount.totalSuccess === 0) return 'fail';
  if (resultCount.hungerCriticalSuccess >= 2 && resultCount.criticalSuccess < 2)
    return 'messyCritical';
  if (resultCount.totalSuccess >= 5 && resultCount.extraCritical <= 2)
    return 'criticalSuccess';
  if (resultCount.totalSuccess >= 0 && resultCount.totalSuccess <= 5)
    return 'success';
  return 'pending';
};


export const handleRollDice = (dicePool: number, hungerLevel: number): {rollResult: Dice[] } => {
  const { regularDiceNum, hungerDiceNum } = calcDicePool(
    dicePool,
    hungerLevel
  );

  const regularRoll = generateRoll(regularDiceNum, regularDiceMap, 'regular');
  const hungerRoll = generateRoll(hungerDiceNum, hungerDiceMap, 'hunger');
  const rollResult = [...regularRoll, ...hungerRoll];
  const resultDescription = evaluateRoll(rollResult);
  return {rollResult};
};
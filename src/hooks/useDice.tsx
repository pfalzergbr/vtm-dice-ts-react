import { useState } from 'react';

import { generateRoll, evaluateRoll, calcDicePool } from '../diceEngine/diceEngine';

export type RollResult =
  | 'hungerCriticalSuccess'
  | 'criticalSuccess'
  | 'criticalFail'
  | 'success'
  | 'fail';

type FinalResult =
  | 'criticalSuccess'
  | 'bestialFail'
  | 'messyCritical'
  | 'success'
  | 'fail'
  | 'pending';

export type DiceType = 'regular' | 'hunger';

export type DiceMap = [
  RollResult,
  RollResult,
  RollResult,
  RollResult,
  RollResult,
  RollResult,
  RollResult,
  RollResult,
  RollResult,
  RollResult
];

export interface Dice {
  value: number;
  type: DiceType;
  result: RollResult;
}

export interface ResultCount {
  totalSuccess: number,
  hungerCriticalSuccess: number,
  criticalSuccess: number,
  extraCritical: number,
  criticalFail: number,
  success: number,
  fail: number
}

export interface ResultMessage {
  result: FinalResult;
  message: string;
}

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
    evaluateRoll(rollResult)
    setRollResult(rollResult);
  };

  return { rollDice, rollResult };
  
};

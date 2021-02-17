import { useState } from 'react';

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
  generateRandomDice: (diceMap: DiceMap, type: DiceType) => Dice;
  rollResult: Dice[];
  rollDice: (dicePool: number, hungerLevel: number) => void;
} => {
  const [rollResult, setRollResult] = useState<Dice[]>([]);
  const [resultDescription, setResultDescription] = useState<ResultMessage>({
    result: 'pending',
    message: '',
  });

  const generateRandomDice = (diceMap: DiceMap, type: DiceType): Dice => {
    const value = Math.floor(Math.random() * 10);
    const result = diceMap[value];
    return { value, type, result };
  };

  const generateRoll = (
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

  const evaluateRoll = (rollResult: Dice[]): ResultCount => {
    const results: ResultCount = {
      totalSuccess: 0,
      hungerCriticalSuccess: 0,
      criticalSuccess: 0,
      criticalFail: 0,
      success: 0,
      fail: 0
    }

    rollResult.forEach(dice => {
      results[dice.result]++
    })
    
    const extraCrits = Math.floor((results.criticalSuccess + results.hungerCriticalSuccess) / 2 ) * 2
    results.totalSuccess = results.success + results.criticalSuccess + results.hungerCriticalSuccess + extraCrits;
    
    return results;
    }

  const createMessage = (resultCount:ResultCount): FinalResult => {


      if (resultCount.totalSuccess === 0 && resultCount.criticalFail >= 1)
        return 'bestialFail';
      if (resultCount.totalSuccess === 0)
        return 'fail';
      if (resultCount.hungerCriticalSuccess >= 2 && resultCount.criticalSuccess < 2)
        return 'messyCritical';
      if (resultCount.totalSuccess >= 0 && resultCount.totalSuccess <= 5)
        return 'success';
      return 'pending';


  };

  const rollDice = (dicePool: number, hungerLevel: number) => {
    const calcDicePool = (
      dicePool: number,
      hungerLevel: number
    ): { regularDiceNum: number; hungerDiceNum: number } => {
      const regularDiceNum =
        dicePool > hungerLevel ? dicePool - hungerLevel : 0;

      const hungerDiceNum = dicePool > hungerLevel ? hungerLevel : dicePool;

      return {
        regularDiceNum,
        hungerDiceNum,
      };
    }

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

  return { generateRandomDice, rollDice, rollResult };
  
};

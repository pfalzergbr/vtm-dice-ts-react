import React, { useState } from 'react';

export type RollResult = 'criticalSuccess' | 'criticalFail' | 'success' | 'fail';
type FinalResult =
  | 'criticalSuccess'
  | 'bestialFail'
  | 'messyCritical'
  | 'success'
  | 'fail';

export type DiceType = 'regular' | 'hunger' 

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
  'criticalSuccess',
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
  rollDice: (dicePool: number, hungerLevel: number) => void
} => {
  // const [regularDicePool, setRegularDicePool] = useState<Dice[]>([]);
  // const [hungerDicePool, setHungerDicePool] = useState<Dice[]>([]);
  const [rollResult, setRollResult] = useState<Dice[]>([]);
  const [resultDescription, setResultDescription] = useState(null);

  const generateRandomDice = (diceMap: DiceMap, type: DiceType): Dice => {
    const value = Math.floor(Math.random() * 10);
    const result = diceMap[value];
    return { value, type, result };
  };

  const generateRoll = (diceNum: number, diceMap: DiceMap, type:DiceType): Dice[] => {
    const rollArray: Dice[] = [];

    for (let i = 0; i < diceNum; i++) {
      const rolledDice = generateRandomDice(diceMap, type);
      rollArray.push(rolledDice);
    }

    return rollArray;
  };

  const evaluateRoll = () => {};

  const createMessage = () => {};

  const rollDice = (dicePool: number, hungerLevel: number) => {
    const calcDicePool = (dicePool: number, hungerLevel: number) : { regularDiceNum : number, hungerDiceNum : number} => {
      const regularDiceNum = dicePool > hungerLevel 
        ? dicePool - hungerLevel 
        : 0 
    
      const hungerDiceNum = dicePool > hungerLevel
        ? hungerLevel
        : dicePool

      return {
        regularDiceNum,
        hungerDiceNum
      }
    }

    const {regularDiceNum, hungerDiceNum} = calcDicePool(dicePool, hungerLevel);

    const regularRoll = generateRoll(regularDiceNum, regularDiceMap, 'regular');
    const hungerRoll = generateRoll(hungerDiceNum, hungerDiceMap, 'hunger');
    const rollResult = [...regularRoll, ...hungerRoll];
    setRollResult(rollResult);
  };

  return { generateRandomDice, rollDice, rollResult };
};

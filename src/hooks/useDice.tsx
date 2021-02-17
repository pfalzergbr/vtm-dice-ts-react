import React, { useState } from 'react';

type RollResult = 'criticalSuccess' | 'criticalFail' | 'success' | 'fail';
type FinalResult =
  | 'criticalSuccess'
  | 'bestialFail'
  | 'messyCritical'
  | 'success'
  | 'fail';

type DiceMap = [
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
  generateRandomDice: (diceMap: DiceMap) => Dice;
  rollResult: Dice[];
} => {
  // const [regularDicePool, setRegularDicePool] = useState<Dice[]>([]);
  // const [hungerDicePool, setHungerDicePool] = useState<Dice[]>([]);
  const [rollResult, setRollResult] = useState<Dice[]>([]);
  const [resultDescription, setResultDescription] = useState(null);

  const generateRandomDice = (diceMap: DiceMap): Dice => {
    const value = Math.floor(Math.random() * 10);
    const result = diceMap[value];
    return { value, result };
  };

  const generateRoll = (diceNum: number, diceMap: DiceMap): Dice[] => {
    const rollArray: Dice[] = [];

    for (let i = 0; i < diceNum; i++) {
      const rolledDice = generateRandomDice(diceMap);
      rollArray.push(rolledDice);
    }

    return rollArray;
  };

  const evaluateRoll = () => {};

  const createMessage = () => {};

  const rollDice = (regularDiceNum: number, hungerDiceNum: number) => {
    const regularRoll = generateRoll(regularDiceNum, regularDiceMap);
    const hungerRoll = generateRoll(hungerDiceNum, hungerDiceMap);
    const rollResult = [...regularRoll, ...hungerRoll];
    setRollResult(rollResult);
  };

  return { generateRandomDice, rollResult };
};

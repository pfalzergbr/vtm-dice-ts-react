import React, { useState } from 'react';

type RollResult = 'criticalSuccess' | 'criticalFail' | 'success' | 'fail';

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
  RollResult,
]

export interface Dice {
  value: number;
  result: RollResult;
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
]

export const useDice = (): {
  generateRandomDice: (diceMap: DiceMap) => Dice;
} => {
  const [regularDicePool, setRegularDicePool] = useState<Dice[]>([]);
  const [hungerDicePool, setHungerDicePool] = useState<Dice[]>([]);
  const [rollResult, setRollResult] = useState<Dice[]>([]);
  const [resultDescription, setResultDescription] = useState(null);

  const generateRandomDice = (diceMap: DiceMap): Dice => {
    const value = Math.floor(Math.random() * 10);
    const result = diceMap[value];

    return {
      value,
      result
    };
  };

  const generateRoll = (diceNum: number) => {
    // let rollArray: number[]
    // for ( let i = 0; i < diceNum; i++){
    //   const rolledNumber = generateRandomDice()
    // }
  };

  const createMessage = () => {};

  const evaluateRoll = () => {};

  const rollDice = (normalDiceNum: number, hungerDiceNum: number) => {};

  return { generateRandomDice };
};

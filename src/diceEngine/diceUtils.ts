import { DiceMap, DiceType, Dice } from './diceTypes';

export const generateRandomDice = (diceMap: DiceMap, type: DiceType): Dice => {
  const value = Math.floor(Math.random() * 10);
  const result = diceMap[value];
  return { value, type, result };
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
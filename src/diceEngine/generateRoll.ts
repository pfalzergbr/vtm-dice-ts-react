import {
  DiceMap,
  DiceType,
  Dice,
} from './diceTypes';
import {generateRandomDice} from './diceUtils'

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
import { Dice, ResultCount } from './diceTypes';

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

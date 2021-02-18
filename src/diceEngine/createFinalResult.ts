import { FinalResult, ResultCount } from './diceTypes';

export const createFinalResult = (resultCount: ResultCount): FinalResult => {
  if (resultCount.totalSuccess === 0 && resultCount.criticalFail >= 1)
    return 'bestialFail';
  if (resultCount.totalSuccess === 0) return 'fail';
  if (
    resultCount.hungerCriticalSuccess >= 2 &&
    resultCount.criticalSuccess < resultCount.hungerCriticalSuccess
  )
    return 'messyCritical';
  if (resultCount.totalSuccess >= 5 && resultCount.extraCritical <= 2)
    return 'criticalSuccess';
  if (resultCount.totalSuccess >= 0 && resultCount.totalSuccess <= 5)
    return 'success';
  return 'pending';
};

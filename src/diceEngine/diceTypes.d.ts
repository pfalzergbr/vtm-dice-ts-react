export type RollResult =
  | 'hungerCriticalSuccess'
  | 'criticalSuccess'
  | 'criticalFail'
  | 'success'
  | 'fail';

export type FinalResult =
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

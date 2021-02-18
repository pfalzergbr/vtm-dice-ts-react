import { createFinalResult } from '../diceEngine'
import {  ResultCount } from '../diceTypes';


describe('createFinalResult', () => {
  test('should return success if the roll has successes, but less than two criticals', () => {
    const resultObject: ResultCount = {
      totalSuccess: 3,
      hungerCriticalSuccess: 0,
      criticalSuccess: 0,
      extraCritical: 0,
      criticalFail: 0,
      success: 3,
      fail: 4,
    }
    const message = createFinalResult(resultObject);
    expect(message).toBe('success');
  })

  test('should return fail if the roll has no successes and no criticals', () => {
    const resultObject: ResultCount = {
      totalSuccess: 0,
      hungerCriticalSuccess: 0,
      criticalSuccess: 0,
      extraCritical: 0,
      criticalFail: 0,
      success: 0,
      fail: 4,
    }
    const message = createFinalResult(resultObject);
    expect(message).toBe('fail');
  })

  test('should return bestialFail if the roll has a critical fail, but no successes, no criticals', () => {
    const resultObject: ResultCount = {
      totalSuccess: 0,
      hungerCriticalSuccess: 0,
      criticalSuccess: 0,
      extraCritical: 0,
      criticalFail: 1,
      success: 0,
      fail: 4,
    }
    const message = createFinalResult(resultObject);
    expect(message).toBe('bestialFail');
  })

  test('should return critical success if there are more than 5 successes, and at least two extra criticals', () => {
    const resultObject: ResultCount = {
      totalSuccess: 5,
      hungerCriticalSuccess: 0,
      criticalSuccess: 2,
      extraCritical: 2,
      criticalFail: 0,
      success: 1,
      fail: 2,
    }
    const message = createFinalResult(resultObject);
    expect(message).toBe('criticalSuccess');
  })

  test('should return messy critical, if there is at least two hunger criticals, and more hunger criticals than regular', () => {
    const resultObject: ResultCount = {
      totalSuccess: 5,
      hungerCriticalSuccess: 2,
      criticalSuccess: 0,
      extraCritical: 2,
      criticalFail: 0,
      success: 1,
      fail: 2,
    }
    const message = createFinalResult(resultObject);
    expect(message).toBe('messyCritical');
  })
})

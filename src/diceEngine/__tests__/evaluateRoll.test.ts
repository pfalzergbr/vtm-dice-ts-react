import { evaluateRoll } from '../diceEngine'
import { Dice, ResultCount } from '../diceTypes';

describe('evaluateRoll', () => {
  test('should return the correct results with regular successes only', () => {
    const rollArray: Dice[] = [
      {value: 7, type: 'regular', result: 'success' },
      {value: 4, type: 'regular', result: 'fail' },
      {value: 3, type: 'regular', result: 'fail' },
      {value: 5, type: 'hunger', result: 'fail' },
      {value: 8, type: 'regular', result: 'success' }
    ]

    const resultObject: ResultCount = {
      totalSuccess: 2,
      hungerCriticalSuccess: 0,
      criticalSuccess: 0,
      extraCritical: 0,
      criticalFail: 0,
      success: 2,
      fail: 3,
    }


    const results = evaluateRoll(rollArray)
    expect(results).toMatchObject(resultObject)
  })


  test('should return correct results with one normal critical success', () => {
    const rollArray: Dice[] = [
      {value: 0, type: 'regular', result: 'criticalSuccess' },
      {value: 4, type: 'regular', result: 'fail' },
      {value: 3, type: 'regular', result: 'fail' },
      {value: 5, type: 'regular', result: 'fail' },
      {value: 9, type: 'hunger', result: 'success' },
      {value: 8, type: 'hunger', result: 'success' }
    ]

    const resultObject: ResultCount = {
      totalSuccess: 3,
      hungerCriticalSuccess: 0,
      criticalSuccess: 1,
      extraCritical: 0,
      criticalFail: 0,
      success: 2,
      fail: 3,
    }


    const results = evaluateRoll(rollArray)
    expect(results).toMatchObject(resultObject)
  })

  
  test('should return correct results with two critical success', () => {
    const rollArray: Dice[] = [
      {value: 0, type: 'regular', result: 'criticalSuccess' },
      {value: 4, type: 'regular', result: 'fail' },
      {value: 3, type: 'regular', result: 'fail' },
      {value: 0, type: 'regular', result: 'criticalSuccess' },
      {value: 5, type: 'hunger', result: 'fail' },
      {value: 9, type: 'hunger', result: 'success' },
      {value: 8, type: 'hunger', result: 'success' }
    ]

    const resultObject: ResultCount = {
      totalSuccess: 6,
      hungerCriticalSuccess: 0,
      criticalSuccess: 2,
      extraCritical: 2,
      criticalFail: 0,
      success: 2,
      fail: 3,
    }


    const results = evaluateRoll(rollArray)
    expect(results).toMatchObject(resultObject)
  })


  test('should return correct results with three critical success', () => {
    const rollArray: Dice[] = [
      {value: 0, type: 'regular', result: 'criticalSuccess' },
      {value: 4, type: 'regular', result: 'fail' },
      {value: 4, type: 'regular', result: 'fail' },
      {value: 3, type: 'regular', result: 'fail' },
      {value: 0, type: 'regular', result: 'criticalSuccess' },
      {value: 0, type: 'regular', result: 'criticalSuccess' },
      {value: 5, type: 'hunger', result: 'fail' },
      {value: 9, type: 'hunger', result: 'success' },
      {value: 8, type: 'hunger', result: 'success' }
    ]

    const resultObject: ResultCount = {
      totalSuccess: 7,
      hungerCriticalSuccess: 0,
      criticalSuccess: 3,
      extraCritical: 2,
      criticalFail: 0,
      success: 2,
      fail: 4,
    }


    const results = evaluateRoll(rollArray)
    expect(results).toMatchObject(resultObject)
  })

  test('should return correct results with two critical success on hunger dice', () => {
    const rollArray: Dice[] = [
      {value: 0, type: 'regular', result: 'criticalSuccess' },
      {value: 4, type: 'regular', result: 'fail' },
      {value: 4, type: 'regular', result: 'fail' },
      {value: 3, type: 'regular', result: 'fail' },
      {value: 9, type: 'regular', result: 'success' },
      {value: 0, type: 'hunger', result: 'hungerCriticalSuccess' },
      {value: 0, type: 'hunger', result: 'hungerCriticalSuccess' },
      {value: 5, type: 'hunger', result: 'fail' },
      {value: 8, type: 'hunger', result: 'success' }
    ]

    const resultObject: ResultCount = {
      totalSuccess: 7,
      hungerCriticalSuccess: 2,
      criticalSuccess: 1,
      extraCritical: 2,
      criticalFail: 0,
      success: 2,
      fail: 4,
    }


    const results = evaluateRoll(rollArray)
    expect(results).toMatchObject(resultObject)
  })

  test('should return correct results with criticals and critical fails', () => {
    const rollArray: Dice[] = [
      {value: 5, type: 'regular', result: 'fail' },
      {value: 7, type: 'regular', result: 'success' },
      {value: 4, type: 'regular', result: 'fail' },
      {value: 3, type: 'regular', result: 'fail' },
      {value: 1, type: 'hunger', result: 'criticalFail' },
      {value: 5, type: 'hunger', result: 'fail' },
      {value: 8, type: 'hunger', result: 'success' }
    ]

    const resultObject: ResultCount = {
      totalSuccess: 2,
      hungerCriticalSuccess: 0,
      criticalSuccess: 0,
      extraCritical: 0,
      criticalFail: 1,
      success: 2,
      fail: 4,
    }


    const results = evaluateRoll(rollArray)
    expect(results).toMatchObject(resultObject)
  })

})
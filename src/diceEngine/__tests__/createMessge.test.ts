import { createMessage } from '../createMessage';
import { ResultMessage, ResultCount, FinalResult } from '../diceTypes';

describe('createMessage', () => {
  test('should return the correct message when the roll is a fail', () => {
    const resultCount: ResultCount = { 
      totalSuccess: 0,
      hungerCriticalSuccess: 0,
      criticalSuccess: 0,
      extraCritical: 0,
      criticalFail: 0,
      success: 0,
      fail: 4,}
    const finalResult:FinalResult = 'fail'
    const expectedResult: ResultMessage = {
      result: 'fail',
      message: 'No successes'
    }
    
    const result: ResultMessage = createMessage(resultCount, finalResult);
    expect(result).toMatchObject(expectedResult);
  })

  test('should return the correct message when the roll is a success', () => {
    const resultCount: ResultCount = { 
      totalSuccess: 3,
      hungerCriticalSuccess: 0,
      criticalSuccess: 0,
      extraCritical: 0,
      criticalFail: 0,
      success: 3,
      fail: 4,}
    const finalResult:FinalResult = 'success'
    const expectedResult: ResultMessage = {
      result: 'success',
      message: '3 successes'
    }
    
    const result: ResultMessage = createMessage(resultCount, finalResult);
    expect(result).toMatchObject(expectedResult);
  })

  test('should return the correct message when the roll is a critical success', () => {
    const resultCount: ResultCount = { 
      totalSuccess: 7,
      hungerCriticalSuccess: 0,
      criticalSuccess: 2,
      extraCritical: 2,
      criticalFail: 0,
      success: 3,
      fail: 2,}
    const finalResult:FinalResult = 'criticalSuccess'
    const expectedResult: ResultMessage = {
      result: 'criticalSuccess',
      message: '3 successes, 2 criticals, 7 successes all together. Critical Success!'
    }
    
    const result: ResultMessage = createMessage(resultCount, finalResult);
    expect(result).toMatchObject(expectedResult);
  })
  
  test('should return the correct message when the roll is a messy critical', () => {
    const resultCount: ResultCount = { 
      totalSuccess: 5,
      hungerCriticalSuccess: 2,
      criticalSuccess: 0,
      extraCritical: 2,
      criticalFail: 0,
      success: 1,
      fail: 2,
    }
    const finalResult:FinalResult = 'messyCritical'
    const expectedResult: ResultMessage = {
      result: 'messyCritical',
      message: '1 success, 2 criticals on hunger dice, 5 successes all together. Messy Critical!'
    }
    
    const result: ResultMessage = createMessage(resultCount, finalResult);
    expect(result).toMatchObject(expectedResult);
  })

  test('should return the correct message when the roll is a bestial fail', () => {
    const resultCount: ResultCount = { 
      totalSuccess: 0,
      hungerCriticalSuccess: 0,
      criticalSuccess: 0,
      extraCritical: 0,
      criticalFail: 1,
      success: 0,
      fail: 4,
    }
    const finalResult:FinalResult = 'bestialFail'
    const expectedResult: ResultMessage = {
      result: 'bestialFail',
      message: 'No successes, 1 critical fail. Bestial Failiure!'
    }
    
    const result: ResultMessage = createMessage(resultCount, finalResult);
    expect(result).toMatchObject(expectedResult);
  })
  
})

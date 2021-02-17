import {generateRoll, regularDiceMap, hungerDiceMap} from '../diceEngine'

describe('generateRoll', () => {
  describe('When generating a roll of regular dice', () => {
    const diceNum = 5
    const diceMap = regularDiceMap
    const type = 'regular'
    const rollResult = generateRoll(diceNum, diceMap, type)

    test('should return the correct number of result dice', () => {
      expect(rollResult.length).toBe(diceNum)
    })
    
    test('should return the array with correct types of dice', () => {
      expect(rollResult.every(dice => dice.type === type )).toBe(true);
    })
  })
  
  describe('When generating a roll of hunger dice', () => {
    const diceNum = 3
    const diceMap = hungerDiceMap
    const type = 'hunger'
    const rollResult = generateRoll(diceNum, diceMap, type)

    test('should return the correct number of result dice', () => {
      expect(rollResult.length).toBe(diceNum)
    })
    
    test('should return the array with correct types of dice', () => {
      expect(rollResult.every(dice => dice.type === type )).toBe(true);
    })
  })
  
})

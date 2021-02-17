import { calcDicePool } from '../diceUtils'

describe('calcDicePool', () => {

  describe('When dicepool is higher than hunger level', () => {

    test('should calculate regular dice number correctly ', () => {
      const result = calcDicePool(5, 2)
      expect(result.regularDiceNum).toBe(3)
    })
    
  
    test('should calculate hunger dice number correctly', () => {
      const result = calcDicePool(5, 2)
      expect(result.hungerDiceNum).toBe(2)
    })
    
  })

  describe('When dicepool is equal to hunger level', () => {
    
    test('should calculate regular dice number correctly ', () => {
      const result = calcDicePool(3, 3)
      expect(result.regularDiceNum).toBe(0)
    })
    
  
    test('should calculate hunger dice number correctly', () => {
      const result = calcDicePool(3, 3)
      expect(result.hungerDiceNum).toBe(3)
    })
    
  })

  describe('When hunger level is higher than dicepool', () => {
    
    test('should calculate regular dice number correctly ', () => {
      const result = calcDicePool(4, 5)
      expect(result.regularDiceNum).toBe(0)
    })
    
  
    test('should calculate hunger dice number correctly', () => {
      const result = calcDicePool(4, 5)
      expect(result.hungerDiceNum).toBe(4)
    })
    
  })
  
})

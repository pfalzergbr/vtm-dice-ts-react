import React, { useState } from 'react';

enum NormalRollResult {
  criticalSuccess = 'Critical Success',
  success = 'Success',
  fail = 'Fail',
}

enum HungerRollResult {
  criticalSuccess = 'Critical Success',
  criticalFail = 'Critical Failiure',
  success = 'Success',
  fail = 'Fail',
}

interface RegularDice {
  value: number;
  result: NormalRollResult
}

interface HungerDice {
  value: number;
  result: HungerRollResult
}

interface DiceMap  {
  0: string,
  1: string,
  2: string,
  3: string,
  4: string,
  5: string,
  6: string,
  7: string,
  8: string,
  9: string,
}

export const useDice = (): { generateRandomDice: (diceMap: DiceMap) => number } => {
  const [regularDicePool, setRegularDicePool] = useState<RegularDice[]>([]); 
  const [hungerDicePool, setHungerDicePool] = useState<HungerDice[]>([]);
  const [rollResult, setRollResult ] = useState<RegularDice[] | HungerDice[]>([]);
  const [resultDescription, setResultDescription] = useState(null);

  const regularDiceMap: DiceMap = {
    0: 'Critical Success',
    1: 'Fail',
    2: 'Fail',
    3: 'Fail',
    4: 'Fail',
    5: 'Fail',
    6: 'Success',
    7: 'Success',
    8: 'Success',
    9: 'Success',
  }

  const hungerDiceMap: DiceMap = {
    0: 'Critical Success',
    1: 'Bestial Failiure',
    2: 'Fail',
    3: 'Fail',
    4: 'Fail',
    5: 'Fail',
    6: 'Success',
    7: 'Success',
    8: 'Success',
    9: 'Success',
  }


  const generateRandomDice = (diceMap: DiceMap) : number => {
    const value = Math.floor(Math.random()*10)
    return value;
    // const result = diceMap[value]
    
  }

  const generateRoll = ( diceNum: number)  => {
    // let rollArray: number[]
    // for ( let i = 0; i < diceNum; i++){
    //   const rolledNumber = generateRandomDice()
    // }
  }

  const createMessage = () => {

  }

  const evaluateRoll = () => {

  }

  const rollDice = ( normalDiceNum: number, hungerDiceNum: number ) => {

  }

  



  return { generateRandomDice, }
}



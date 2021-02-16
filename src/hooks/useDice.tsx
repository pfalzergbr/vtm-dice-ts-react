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


export const useDice = (): { generateRandomDice: () => number } => {
  const [regularDicePool, setRegularDicePool] = useState<RegularDice[]>([]); 
  const [hungerDicePool, setHungerDicePool] = useState<HungerDice[]>([]);
  const [rollResult, setRollResult ] = useState<RegularDice[] | HungerDice[]>([]);
  const [resultDescription, setResultDescription] = useState(null);

  const regularDiceMap = {
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

  const hungerDiceMap = {
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


  const generateRandomDice = () : number => {
    return Math.floor(Math.random()*10)
    
  }

  const generateRoll = () => {

  }

  const createMessage = () => {
    
  }

  const evaluateRoll = () => {

  }

  const rollDice = ( normalDiceNum: number, hungerDiceNum: number ) => {

  }

  



  return { generateRandomDice, }
}



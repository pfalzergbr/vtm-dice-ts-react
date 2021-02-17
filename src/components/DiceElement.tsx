import React from 'react'
import './styles/Dice.css'
import { Dice } from '../hooks/useDice';

interface Props { dice: Dice }

function DiceElement(props: Props) {
  const {value, type } = props.dice

  return (
    <div className={`dice-container ${type}-dice`}>
      <h3>{value}</h3>
    </div>
  )
}

export default DiceElement

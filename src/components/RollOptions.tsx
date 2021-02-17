import React from 'react'

interface Props { 
  increaseRegularDice: () => void
  decreaseRegularDice: () => void
  increaseHungerDice: () => void
  decreaseHungerDice: () => void
  regularDice: number,
  hungerDice: number
}

function RollOptions(props: Props) {
  const {} = props

  return (
    <div></div>
  )
}

export default RollOptions

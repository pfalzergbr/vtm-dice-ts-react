import React from 'react';

interface Props {}

function Stepper(props: Props) {
  const {} = props;

  return (
    <div className='wrapper'>
      <h2 className='stepper-name'>Dicepool</h2>

      <div className='dicepool-stepper'>
        <span className='next'></span>
        <span className='previous'></span>
        <div className='number-box'>
          <span id='dicepool-number'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Stepper;

import React from 'react';

interface Props {
  increase: () => void
  decrease: () => void
}

function Stepper(props: Props) {
  const {increase, decrease} = props;

  return (
    <div className='wrapper'>
      <h2 className='stepper-name'>Dicepool</h2>

      <div className='dicepool-stepper'>
        <span onClick={increase} className='next'></span>
        <span onClick={decrease} className='previous'></span>
        <div className='number-box'>
          <span id='dicepool-number'>0</span>
        </div>
      </div>
    </div>
  );
}

export default Stepper;

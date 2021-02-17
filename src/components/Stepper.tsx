import React from 'react';
import './styles/Stepper.css';

interface Props {
  fieldName: string;
  increase: () => void;
  decrease: () => void;
  count: number;
}

function Stepper(props: Props) {
  const { fieldName, count, increase, decrease } = props;

  return (
    <div className='wrapper'>
      <h2 className='stepper-name'>{fieldName}</h2>

      <div className='dicepool-stepper'>
        <span onClick={increase} className='next'></span>
        <span onClick={decrease} className='previous'></span>
        <div className='number-box'>
          <span id='dicepool-number'>{count}</span>
        </div>
      </div>
    </div>
  );
}

export default Stepper;

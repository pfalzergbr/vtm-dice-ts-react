import React from 'react';
import './styles/DiceField.css';

interface Props {}

function DiceField(props: Props) {
  const {} = props;

  return (
    <section className='diceroll-area'>
      <div className='dicebox'></div>
    </section>
  );
}

export default DiceField;

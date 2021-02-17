import React from 'react';
import Header from './components/Header';
import { useStepper } from './hooks/useStepper';

function App() {
  const {
    count: regularDice,
    increaseCount: increaseRegularDice,
    decreaseCount: decreaseRegularDice,
  } = useStepper(1, 15);

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;

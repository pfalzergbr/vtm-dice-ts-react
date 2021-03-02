import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('RollOption section', () => {
  test('clicking Dicepool stepper up should increase dicecount', () => {
    render(<App />);
    const diceStepUp = screen.getByLabelText(/dicepool count step up/i);
    const diceStepDown = screen.getByLabelText(/dicepool count step down/i);
    const dicepool = document.getElementById('Dicepool-number');

    userEvent.click(diceStepUp);
    userEvent.click(diceStepUp);
    expect(dicepool).toHaveTextContent('3');
    userEvent.click(diceStepUp);
    expect(dicepool).toHaveTextContent('4');
    userEvent.click(diceStepDown);
    userEvent.click(diceStepDown);
    expect(dicepool).toHaveTextContent('2');
    
  });

  test('clicking Hunger stepper up should increase dicecount', () => {
    render(<App />);
    const hungerStepUp = screen.getByLabelText(/hunger count step up/i);
    const hungerStepDown = screen.getByLabelText(/hunger count step down/i);
    const hungerDicepool = document.getElementById('Hunger-number');
    userEvent.click(hungerStepUp);
    userEvent.click(hungerStepUp);
    userEvent.click(hungerStepUp);
    expect(hungerDicepool).toHaveTextContent('3');
    userEvent.click(hungerStepUp);
    userEvent.click(hungerStepUp);
    expect(hungerDicepool).toHaveTextContent('5');
    userEvent.click(hungerStepDown);
    expect(hungerDicepool).toHaveTextContent('4');
  });
});

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
      <h2 className='dicepool-stepper-name'>{fieldName}</h2>
      <div className='dicepool-stepper'>
        <span
          onClick={increase}
          className='next'
          role='button'
          aria-label={`${fieldName} count step up`}
          // id={`stepper-increase-${fieldName}`}
        ></span>
        <span
          onClick={decrease}
          className='previous'
          role='button'
          aria-label={`${fieldName} count step down`}
          // id={`stepper-decrease-${fieldName}`}
        ></span>
        <div className='number-box'>
          <span id={`${fieldName}-number`}>{count}</span>
        </div>
      </div>
    </div>
  );
}

export default Stepper;

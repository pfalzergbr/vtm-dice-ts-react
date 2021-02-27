import './styles/MessageBox.css';
import { ResultMessage } from '../diceEngine/diceTypes';

interface Props { resultDescription: ResultMessage }

function MessageBox(props: Props) {
  const {message} = props.resultDescription;

  return (
    <section className='result-area'>
      <div className='result-box'>
        <div className='result-message'>
          <p className='result-message-paragraph'>{message}</p>
        </div>
        <div className='end-result'>
          <p className='end-result-paragraph'></p>
        </div>
      </div>
    </section>
  );
}

export default MessageBox;

import React from 'react';
import './styles/MessageBox.css';

interface Props {}

function MessageBox(props: Props) {
  const {} = props;

  return (
    <section className='result area'>
      <div className='result-box'>
        <div className='result-message'>
          <p className='result-message-paragraph'></p>
        </div>
        <div className='end-result'>
          <p className='end-result-paragraph'></p>
        </div>
      </div>
    </section>
  );
}

export default MessageBox;

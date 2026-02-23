import { useState } from 'react';
import './FAQList.css'

function FAQList({ question, answer }){
  const [show, setShow] = useState(false);

  return (
    <div className='faq' onClick={() => {
      setShow(!show);
    }}>
      <div className='question'>
        <p>{question}</p>
        <svg className={show? 'show' : ''}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#99A1AF"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>
      <div className={show? 'answer' : 'answer hidden'}>
        <p>
          {answer}
        </p>
      </div>
    </div>
  )
}

export default FAQList;
import './App.css';
import React, { useState, useRef } from 'react';

function App() {

  const btn2Ref = useRef(null),
    btn3Ref = useRef(null);

  const [btn1Val, setBtn1Val] = useState(1),
    [btn2State, setBtn2State] = useState('Hide'),
    [btn3State, setBtn3State] = useState('Hide');

  const showBtn = () => {
    setBtn2State('');
    setBtn3State('');
    setBtn1Val(1);
  };

  const showHidden = e => {
    const target = +e.current.value;
    setBtn1Val(target);
    (target === 2) ? setBtn2State('Hide') : setBtn3State('Hide');
  }

  return (
    <div className = "Wrap" >
      <button onClick={showBtn} value={btn1Val}>{btn1Val}</button>
      <button ref={btn2Ref} className={btn2State} onClick={() => showHidden(btn2Ref)} value="2">2</button>
      <button ref={btn3Ref} className={btn3State} onClick={() => showHidden(btn3Ref)} value="3">3</button>
    </div>
  );
}

export default App;
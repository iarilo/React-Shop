import React, { useState, useEffect, useRef } from 'react';

const Fanclicker = () => {
  const [num, setNum] = useState(0);
  const btnRef = useRef(null);

  function plus() {
    setNum(num + 1);
  }

  function minus() {
    setNum(num - 1);
  }

  useEffect(() => {
    if(num > 5) {
      btnRef.current.style.backgroundColor = "blue";
    }
    // console.log();
    //return () => console.log('goodbye');
    //window.alert("WINDOW");
  }, [num]);

  return (
    <div style={{ margin: '20px auto 0' }}>
      <button ref={btnRef} onClick={plus}>Plus</button>
      <span style={{ margin: '0 5px' }}>{num}</span>
      <button onClick={minus}>Minus</button>
    </div>
  );
};

export default Fanclicker;

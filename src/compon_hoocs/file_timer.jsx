import React,{useRef ,useEffect, useState} from 'react'

function setDefaultvalue() {
  //Создаю ключь в localStorage
  const user = localStorage.getItem('text');
    return (user ? +user : 0); 
 }

const FanTimer = () => {

  const [count, setCount] = useState(setDefaultvalue);
  const [isCount,setIsCount] = useState(false);
  const timerRef = useRef(null);
 // console.log("render")
 
   function Start() { setIsCount(true);}

  function Stop() { setIsCount(false);}

  function Reset() { setIsCount(false);
   setCount(0);
  }

  useEffect(()=>{
    //Записывает значение в localStorage
    //console.log("apdate")
    localStorage.setItem('text', count);
    },[count]);

  useEffect(()=>{
     //Подсчёт
  // После нажатия на кнопку isCount true поэтому запускается       setInterval()
    if(isCount){
       timerRef.current = setInterval(() => {
       setCount((prev) => prev + 1);
    }, 1000); 
  }

    return () => {
 //timerRef.current true поэтому срабатывает clearInterval()
      timerRef.current && clearInterval(timerRef.current);
      // обнуление  timerRef.current
      timerRef.current = null;
    };
  },[isCount]);

   return (
    <div className='conteiner'>
      <h3 className='timer'>React timer</h3>
     <span className='check'>{count}</span>
     <div className='cont_butt'>
       {!isCount 
          ? <button onClick={Start} >Start</button>
          : <button onClick={Stop}>Stop</button>
        }
             <button onClick={Reset} >Reset</button>
     </div>
   </div>
  )
}
export default FanTimer

 //====================================================
/* 
const  FanTimer = () => {
   //const input = useRef(null);
// useEffect(()=>{console.log(input)}); 
 //const num = useRef(0);
  const [count, setCount] = useState(0);
 function Click() {
   //num.current = 1;
   //setCount(count +1);
   setCount((prevCount) => { return prevCount +1 });
   setCount((prevCount) => { return prevCount + 1 });
}
// useEffect(()=>{console.log(num.current);});
  return (
    <div style={{width:'25%', margin:'20px auto'}}> */

    {/*   <input placeholder='name' ref={input} /> */}
     {/* <button onClick={Click} >{num.current}</button> */}
/*       <button onClick={Click} >{count}</button>
   </div>
  )
}
export default FanTimer  */
import React,{useRef ,useEffect, useState} from 'react'




const FanTimer = () => {
 
 
  return (
    <div className='conteiner'>
      <h3 className='timer'>React timer</h3>
     <span className='check'>счёт</span>
     <div className='cont_butt'>
        <button >Start</button>
        <button >Stop</button>
        <button >Reset</button>
     </div>
      
    </div>
  )
}
export default FanTimer





















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
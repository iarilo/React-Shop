import React,{useState,useEffect} from "react"

const Fanclicker = () => {

  const[num, setNum] = useState(0);

  function plus() {
   setNum(num +1 ); 
  }

  function minus() {
    setNum(num -1);
  }

  useEffect(
    ()=>{
      //console.log('Hellow',num);
      //return () => console.log('goodbye');
    },[num]);


  return (
    <div style={{margin:'20px auto 0'}}>
     <button onClick={plus}>Plus</button>
     <span style={{margin:'0 5px'}}>{num}</span>
     <button onClick={minus }>Minus</button>
     </div>
  )
}

export default Fanclicker
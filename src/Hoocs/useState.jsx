import React,{useState,useEffect} from 'react'

const UseState = () => {
 const [value,setValue] = useState(()=>{
   const userCount = localStorage.getItem('text');
   return +userCount ||  0; 
 });

 const [state,setState] = useState({
   count:0,
   isCount:false,
 });

 useEffect(()=>{
 //console.log(state)
 },[state]);

 function fanCount () {
   setState({
    ...state, 
    count: state.count +1 });
 }

  function fanIsCount() {
    setState({
      ...state,
      isCount: !state.isCount });
  }


  return (
    <div className='conteiner'>
          <h3 className='timer'>useState</h3>
       <div className='cont_butt'>
        <button onClick={fanCount} >count</button>
        <button onClick={fanIsCount}>isCount</button>
       
      </div>
  </div>
 
  )
}

export default UseState
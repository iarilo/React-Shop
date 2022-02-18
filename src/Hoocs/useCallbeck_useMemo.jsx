import React,{useCallback,useMemo,useState} from "react";


 export const FanCollbeckMemo =React.memo (({onClick, count}) =>{
   //console.log('render',count);

   return(
     <div className=" ">
         <button onClick={onClick} >{count}</button>
     </div>
   )
 })

  export const DualCounter = ()=> {
    const[count1,setCount1] = useState(0)
    const incriment1 = useCallback( ()=> setCount1(c => c + 1),[] )

    const [count2, setCount2] = useState(0)
    const incriment2 = useCallback(() => setCount2(c => c + 1),[])

    return (
   <div>
      <h3>useCallbeck useMemo</h3>
        <div className=" Memo">
          <FanCollbeckMemo count={count1} onClick={incriment1} />
          <FanCollbeckMemo count={count2} onClick={incriment2} />
        </div>
   </div>
       
   

    )
  }
//ReactDOM.render(<DualCounter/>,document.querySelector('#root'))

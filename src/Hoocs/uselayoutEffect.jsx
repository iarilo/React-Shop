import React,{useState,useLayoutEffect,useEffect} from 'react'


export const UselayoutEffect = () => {
const [value,setvalue] = useState(0);

/* useEffect(()=>{
if (value === 0) {
  setvalue(10 + Math.random() * 200);
}
},[value]); */
 useLayoutEffect(() => {
    if (value === 0) {
      setvalue(10 + Math.random() * 200);
    }
  }, [value]);

//console.log('render',value);
  return (
    <div>
      <h3>useLayoutEffect</h3>
    <button onClick={()=> setvalue(0)}>value:{value}</button>
    </div>
  )
}
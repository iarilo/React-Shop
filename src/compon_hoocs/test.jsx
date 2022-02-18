import React,{useReducer} from "react";


//const Color = {r:0, g:150, b:200};

const colorNum = (num)=>{return(num < 0 ? 0 : num > 255 ? 255 : num);}
const play = 50; 




const reducer = (state,{type, payload = play}) => {

  switch (type) {

    case "Increment_r":
      return {
        ...state, 
        r: colorNum(state.r + payload)
      };

    case "Decrement_r":
      return {
        ...state,
        r: colorNum(state.r - payload)
      }; 

  case "Increment_g":
      return {
        ...state,
        g: colorNum(state.g + payload) 
      };

    case "Decrement_g":
      return {
        ...state,
        g: colorNum(state.g - payload) }; 

    case "Increment_b":
      return {
        ...state,
        b: colorNum(state.b + payload) 
      };

    case "Decrement_b":
      return {
        ...state,
        b: colorNum(state.b - payload)
       }; 
      
    default:
      return state;
  }
};

export const Reducer = () => {

  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 150, b: 200 });
     return(
  <div>
         <h1 style={{color:`rgb(${r},${g},${b})`}}>
           useReducer
        </h1>


    <div>
           <span>r </span>
     <button onClick={()=>dispatch({type:'Increment_r',})}>+</button>
     <button onClick={()=>dispatch({type:'Decrement_r',})}>-</button>
    </div>

    <div>
           <span>g </span>
    <button onClick={()=>dispatch({ type: 'Increment_g',})} >+</button>
    <button onClick={()=>dispatch({ type: 'Decrement_g',})} >-</button>
    </div>

     <div>
           <span>b </span>
    <button onClick={()=>dispatch({ type: 'Increment_b',})} >+</button>
    <button onClick={()=>dispatch({ type: 'Decrement_b',})} >-</button>
     </div>
  </div>
 )
 };
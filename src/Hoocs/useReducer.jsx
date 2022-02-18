import React, { useReducer } from "react";


const limitRGB = (num) =>{return(num < 0 ? 0 : num > 255 ? 255 : num);}
 
 const step = 50;

//const reducer = (state,action" который={type и payload}")=>{
 //const reducer = (state, { type,payload}) => {
//Без объявления const step, payload берёт значение из useReducer    
const reducer = (state, { type, payload = step }) => {
  //switch (action.type) {
 // console.log('state:R ', state.b)
 
  switch (type) {
    case "INCREMENT_R":
      return {
        ...state,//r: 0, g: 150, b: 200
        r: limitRGB(state.r + payload)
      };

    case "DECREMENT_R":
      return {
        ...state,//r: 0, g: 150, b: 200
        r: limitRGB(state.r - payload)
      };


    case "INCREMENT_G":
      return {
        ...state,//r: 0, g: 150, b: 200
        g: limitRGB(state.g + payload)
      };


    case "DECREMENT_G":
      return {
        ...state,//r: 0, g: 150, b: 200
        g: limitRGB(state.g - payload)
      };


    case "INCREMENT_B":
      return {
        ...state,//r: 0, g: 150, b: 200
        b: limitRGB(state.b + payload)
      };


    case "DECREMENT_B":
      return {
        ...state,//r: 0, g: 150, b: 200
        b: limitRGB(state.b - payload)
      };
    default:
      return state;
  }
};

export const UseReduser = () => {
  // { r, g, b } начальное состояние
  //  dispatch функюизменения состояния
  // { r: 0, g: 150, b: 200 }  дефолтное значение
  // В reducer содержит всю логику функ.
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 150, b: 200 });

  return (
    <div className="App">
      {/* `rgb(${r}, ${g}, ${b})` дефолтное значение */}
      <h1 style={{ color: `rgb(${r}, ${g}, ${b})`}}>
        useReducer
      </h1>
   

 <div>
   <span>r </span>
         {/* payload:  ключ передачи данных */}
    <button onClick={() => dispatch({ type:"INCREMENT_R"/* , payload: 100 */ })}>
          +
        </button>
    <button onClick={() => dispatch({ type: "DECREMENT_R"/* , payload: 50 */ })}>
          -
    </button>
  </div>

    <div>
        <span>g </span>
    <button onClick={() => dispatch({ type: "INCREMENT_G"/* , payload: 70 */ })}>
          +
        </button>
    <button onClick={() => dispatch({ type: "DECREMENT_G", /* payload: 40 */ })}>
          -
        </button>
    </div>

     <div>
        <span>b </span>
      <button onClick={() => dispatch({type:"INCREMENT_B"/*  ,payload: 20  */})}>
          +
          </button>
      <button onClick={() => dispatch({type:"DECREMENT_B" /* ,payload: 90  */})}>
          -
          </button>
    </div>

    </div>
  );
}

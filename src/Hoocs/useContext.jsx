 import React,{useState,createContext} from "react";

 export const Context = createContext();

 export const FanAuto  = (props) =>{
  const [auto, setAuto] = useState([
    { id:1 , brand:'BMV'},
    { id: 2, brand: 'Opel'},
    { id: 3, brand: 'Audi' },
  ]);

   const addAuto = (add)=>{
    setAuto([auto, ...auto]);
   };

   const remuveAuto = (id) => {
   setAuto(auto.filter(rem => rem.id !== id ));
   };

   const allAuto = {
     auto,
     addAuto,
     remuveAuto,
   };

   return(
     <Context.Provider value={allAuto}>
       {props.children}
     </Context.Provider>
   )
};















































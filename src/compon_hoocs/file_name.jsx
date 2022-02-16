import React,{useContext} from "react";
import {Context} from "../Hoocs/useContext";

export const FanName = (props)=>{
  const {remuveAuto} = useContext(Context);
return(
 <div>
   
    <h3 className="timer_a" 
    onClick={()=> remuveAuto(props.id)}>{props.brand}</h3>
 </div>
)
};

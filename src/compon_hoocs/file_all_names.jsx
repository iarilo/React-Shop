import React,{useContext} from "react";
import {FanName} from './file_name';
import { Context} from '../Hoocs/useContext';

export const FanAllNames = ()=>{
  const{auto = []} = useContext(Context);
return(
 <div className="auto">
    <h2 className="timer">useContext</h2>
   {auto.map((list)=>{
    return <FanName key={list.id} {...list}/>} )}
 </div>
 )
};


































 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 



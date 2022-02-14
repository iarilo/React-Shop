
import React,{useState} from "react";
import Fanclicker from './compon_hoocs/file_clicker';
import FanTimer from './compon_hoocs/file_timer';
import Test from './compon_hoocs/test';

function App() {
 const [click,setKlick] = useState(false);

  function Click() {
    setKlick((prev) => !prev ); 
  }
  
  return (
    <div className="App">
      <div style={{width:'10%'}}> 

      <h3>React App</h3>
     <button onClick={Click}>Toggle clicker</button>
      

      </div>
      {click && <Fanclicker/>}
    {/*  <Fanclicker/> */}
      <FanTimer/>
      <Test/>
    </div>
  );
}

export default App;


import React,{useState} from "react";
import Fanclicker from './compon_hoocs/file_clicker';
import FanTimer from './compon_hoocs/file_timer';

function App() {
 const [click,setKlick] = useState(false);

  function Click() {
    setKlick( !click ); 
  }
  
  return (
    <div className="App">
      <div style={{width:'10%'}}> 

      <h3>React App</h3>
     <button onClick={Click}>Toggle clicker</button>

      </div>
      {click && <Fanclicker/>}
      <FanTimer/>
    </div>
  );
}

export default App;

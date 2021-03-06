
import React,{useState} from "react";
import Fanclicker from './compon_hoocs/file_clicker';
import FanTimer from './compon_hoocs/file_timer';
import UseState from './Hoocs/useState';
import {FanAllNames} from './compon_hoocs/file_all_names';
import {FanAuto} from './Hoocs/useContext';
import {UselayoutEffect} from './Hoocs/uselayoutEffect';
import {DualCounter} from './Hoocs/useCallbeck_useMemo';
import {UseImperativeHandle} from './Hoocs/useImperativeHandle';
import {UseReduser} from './Hoocs/useReducer';
import { Reducer} from './compon_hoocs/test';

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
    <hr style={{width:'50%', background:'red'}}/>
      <FanTimer/>
      <hr style={{ width: '50%', background: 'red' }} />
      <UseState />    
      <hr style={{ width: '50%', background: 'red' }} />
      <FanAuto>
        <FanAllNames/>
      </FanAuto>
      <hr style={{ width: '50%', background: 'red' }} />
      <UselayoutEffect/>
      <hr style={{ width: '50%', background: 'red' }} />
      <DualCounter/>
      <hr style={{ width: '50%', background: 'red' }} />
      < UseImperativeHandle />
      <hr style={{ width: '50%', background: 'red' }} />
      <UseReduser />
      <hr style={{width:'50%',background:'red',marginBottom:'50px'}}/>
      <Reducer/>
      <hr style={{ width: '50%', background: 'red', marginBottom: '50px' }} />
    </div>
  );
}

export default App;

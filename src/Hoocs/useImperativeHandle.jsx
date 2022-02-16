import React,{useRef} from "react";

export const UseImperativeHandle = () => {
return(
  <div>
    <input
    ref={inputRef}
    value={value}
    onChange={(e) => update(e.target.value)}
    placeholder={placeholder}
    style={{borderColor: hasError ? 'red' : 'black'}}
    />
  </div>
)
};
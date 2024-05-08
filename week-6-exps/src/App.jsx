// solvong the previous problem with useMemo

import { useState, useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
 

  let finalValue = useMemo(() => {
      let sum = 0;
      for( let i = 1; i<= inputValue; i++){
        sum = sum + i;
      }
      return sum; //do without this? no, needed to change a global variable
  }, [inputValue])                                    

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {finalValue}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;
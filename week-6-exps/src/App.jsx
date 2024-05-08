// solvong the previous problem with useMemo
// Another difference is that useEffect runs after rendering, while useMemo runs during rendering.
// thats why setFinalValue- state variable was needed for useEffect but not needed here for useMemo, returns works just fine
import { useState, useMemo, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
 

  const doSomething = () => {
    let sum = 0;
    for( let i = 1; i<= inputValue; i++){
      sum = sum + i;
    }
    return sum; 
  }
  let finalValue = useEffect(() => {
      doSomething();
      // let sum = 0;
      // for( let i = 1; i<= inputValue; i++){
      //   sum = sum + i;
      // }
      // return sum; 
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
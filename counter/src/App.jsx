import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0)
  // let counter  = 15

  const addValue = () => {
    console.log("clicked", Math.random());
    
do {
  counter = counter + 1
  setCounter(counter )
} while (counter>20);
    return;
    
  }
  const removeValue = () => {
    console.log("clicked",Math.random());

do {
  counter = counter - 1
  setCounter(counter )
} while (counter<0);
 return;
  }
  return (
    <>
     <h1>Count</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={removeValue}>decrease Value</button>
    </>
  )
}

export default App

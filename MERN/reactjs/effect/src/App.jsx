import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0)

  const inc = () => {
    setCount(count + 1);
  }
  const desc = () => {
    setCount(count - 1);
  }

  useEffect(
    () => {
      console.log('Hello')
      setPrice(count * 500);
    },
    [count]
    // first render and count change
  )
  useEffect(
    () => { 
      console.log('first render only')
    },
    [] // first render only
  )
  
  return (
    <div style={{
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      gap: 30,
      margin: 5
    }}>
      <button onClick={inc}>+</button>
      <h1>{count} - ₹ {price}</h1>
      <button onClick={desc}>-</button>
    </div>
  );
}

export default App;

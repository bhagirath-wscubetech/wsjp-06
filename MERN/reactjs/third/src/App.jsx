import { useState } from "react";
function App(props) {
  const [count, setCount] = useState(0);
  // [state, stateModifier]

  // const [price, setPrice] = useState(100);

  function inc() {
    // count++;
    setCount(count + props.num);
  }
  function desc() {
    // count--;
    setCount(count - props.num);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <button onClick={inc} className="btn btn-primary">+</button>
        </div>
        <div className="col">
          <h1>{count}</h1>
        </div>
        <div className="col">
          <button onClick={desc} className="btn btn-primary">-</button>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

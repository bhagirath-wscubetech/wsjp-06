import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

function App() {
  const [count, setCount] = useState(10);

  function inc() {
    setCount(count + 1);
  }

  function desc() {
    setCount(count - 1);
  }

  return (
    <div>
      <Button symbol="+" handler={inc} />
      <Display value={count} />
      <Button symbol="-" handler={desc} />
    </div>
  );
}

export default App;


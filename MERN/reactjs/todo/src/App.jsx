import { useState } from "react";
import Display from "./Display";
import Input from "./Input";

function App() {
  const [todos, setTodo] = useState(['Task1', 'Task2', 'Task3', 'Task4', 'Task5', 'Task6']);

  const addItem = (item) => {
    setTodo(
      [
        ...todos,
        item
      ]
    )
  }

  const removeItem = (delIndex) => {
    const currentTodo = [
      ...todos
    ];
    console.log(currentTodo[delIndex]);
    currentTodo.splice(delIndex, 1);
    setTodo(currentTodo);
  }

  return (
    <div className="container">
      <Input itemHandler={addItem} />
      <Display data={todos} removeHandler={removeItem} />
    </div>
  );
}

export default App;

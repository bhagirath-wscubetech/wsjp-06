import { useEffect, useState } from "react";
import Display from "./Display";
import Input from "./Input";

function App() {
  const [todos, setTodo] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(
    () => {
      const lsDone = localStorage.getItem("done");
      const lsTodos = localStorage.getItem("todos");
      if (lsDone != undefined) {
        setDone(JSON.parse(lsDone));
        // JSON.parse() -> convert json string to array
        // LS -> state 
      }
      if (lsTodos != undefined) {
        setTodo(JSON.parse(lsTodos));
      }
    },
    []
  )

  useEffect(
    () => {
      if (done.length != 0) {
        localStorage.setItem("done", JSON.stringify(done));
        // JS array to JSON string -> JSON.stringify
        // state -> LS
      }

      if (todos.length != 0) {
        localStorage.setItem("todos", JSON.stringify(todos));
        // JS array to JSON string -> JSON.stringify
      }
    },
    [done, todos]
  )

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
    const removedItem = currentTodo[delIndex];
    setDone(
      [
        ...done,
        removedItem
      ]
    )
    currentTodo.splice(delIndex, 1);
    if (currentTodo.length == 0) {
      localStorage.setItem("todos", JSON.stringify(currentTodo));
    }
    setTodo(currentTodo);
  }

  const undoDone = (index) => {
    const currentDone = [...done];
    const undoItem = currentDone[index];
    setTodo(
      [
        ...todos,
        undoItem
      ]
    )
    currentDone.splice(index, 1);
    if (currentDone.length == 0) {
      localStorage.setItem("done", JSON.stringify(currentDone));
    }
    setDone(currentDone);

  }

  return (
    <div className="container">
      <Input itemHandler={addItem} />
      <div className="row">
        <Display heading="Todos" data={todos} removeHandler={removeItem} />
        <Display heading="Done" data={[...done].reverse()} removeHandler={undoDone} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import Person from "./Person";

function App() {
  const [data, setData] = useState(
    [
      {
        name: "Bhagirath",
        age: 30,
        gender: "M"
      },
      {
        name: "Vikash",
        age: 50,
        gender: "M"
      },
      {
        name: "Nikita",
        age: 10,
        gender: "F"
      },
      {
        name: "Sharawan",
        age: 60,
        gender: "M"
      },
      {
        name: "Deepak",
        age: 21,
        gender: "M"
      },
      {
        name: "Divya",
        age: 21,
        gender: "F"
      }
    ]
  )

  const persons = data.map(
    (d, i) => {
      // console.log(d);
      return <Person key={i} name={d.name} age={d.age} gender={d.gender} />
    }
  );

  return (
    <div className="container">
      {persons}
      {/* <Person name="Vikash" age="30" gender="M" /> */}
    </div>
  );
}

export default App;

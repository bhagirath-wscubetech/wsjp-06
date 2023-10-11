import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./Input";
import Display from "./Display";
function App() {
  const [name, setName] = useState("");
  const [movies, setMovie] = useState([]);

  const changeHandler = (event) => {
    setName(event.target.value);
  }

  const getMovies = () => {
    let API = "";
    if (name == "") {
      API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    } else {
      API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${name}`;
    }

    axios.get(API)
      .then(
        (success) => {
          setMovie(success.data.results);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      )


  }

  useEffect(
    () => {
      getMovies();
    },
    [name]
  )

  return (
    <div>
      <Input name={name} handler={changeHandler} />
      <Display movies={movies} />
    </div>
  );
}

export default App;


import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Website/Main";
import Home from "./Pages/Website/Home";
import About from "./Pages/Website/About";
import Gallery from "./Pages/Website/Gallery";

function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "gallery",
            element: <Gallery />
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Gallery from "./Gallery";


function App() {

  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/gallery",
        element: <Gallery />
      }
    ]
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

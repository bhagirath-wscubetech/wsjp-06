import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Listing from "./Listing";
import Add from "./Add";
import Edit from "./Edit";
function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "",
            element: <Listing />
          },
          {
            path: "add",
            element: <Add />
          },
          {
            path:"edit/:id",
            element:<Edit/>
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={routes} />
  );
}

export default App;

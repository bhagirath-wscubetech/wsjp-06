import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebisteMain from "./Pages/Website/Main";
import AdminMain from "./Pages/Admin/Main";
import Home from "./Pages/Website/Home";
import Store from "./Pages/Website/Store";
import Dashboard from "./Pages/Admin/Dashboard";
import CategoryAdd from "./Pages/Admin/Category/Add";
import CategoryView from "./Pages/Admin/Category/View";
function App() {
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <WebisteMain />,
        children: [
          {
            path: "",
            element: <Home />
          },
          {
            path: "store",
            element: <Store />
          }
        ]
      },
      {
        path: "/admin",
        element: <AdminMain />,
        children: [
          {
            path: "",
            element: <Dashboard />
          },
          {
            path: "category",
            element: <CategoryView />
          },
          {
            path: "category/add",
            element: <CategoryAdd />
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

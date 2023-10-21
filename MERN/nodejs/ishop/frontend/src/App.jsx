import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WebisteMain from "./Pages/Website/Main";
import AdminMain from "./Pages/Admin/Main";
import Home from "./Pages/Website/Home";
import Store from "./Pages/Website/Store";
import Dashboard from "./Pages/Admin/Dashboard";
import CategoryAdd from "./Pages/Admin/Category/Add";
import CategoryView from "./Pages/Admin/Category/View";
import CategoryEdit from "./Pages/Admin/Category/Edit";
import ProductAdd from "./Pages/Admin/Product/Add";
import ProductView from "./Pages/Admin/Product/View";
import ProductEdit from "./Pages/Admin/Product/Edit";

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
            path: "store/:slug?",
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
          },
          {
            path: "category/edit/:id",
            element: <CategoryEdit />
          },
          {
            path: "product",
            element: <ProductView />
          },
          {
            path: "product/add",
            element: <ProductAdd />
          },
          {
            path: "product/edit/:id",
            element: <ProductEdit />
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

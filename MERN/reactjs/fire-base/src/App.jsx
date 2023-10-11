// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Add from "./Components/Add";
import Listing from "./Components/Listing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";

const firebaseConfig = {
  apiKey: "AIzaSyADdGCebSNfhprO0RXQWGEQAXYjZuk_VVI",
  authDomain: "wsjp-06.firebaseapp.com",
  projectId: "wsjp-06",
  storageBucket: "wsjp-06.appspot.com",
  messagingSenderId: "264115126975",
  appId: "1:264115126975:web:9baeac30a2d5c5a5413c0a",
  measurementId: "G-HB1NBB819W"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Listing />
    },
    {
      path: "/add",
      element: <Add />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]
)

function App() {
  return (
    <div className="max-w-[1200px] mx-auto p-3">
      {/* <RouterProvider router={routes} /> */}
    </div>
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Dashboard from "../views/Dashboard";
import Detail from "../views/Detail";
import Header from "../components/Header";
import Login from "../views/Login";
import Registered from "../views/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/detail/:id",
        element: <Detail />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Registered />
      },
    ],
  },
]);

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}


export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}






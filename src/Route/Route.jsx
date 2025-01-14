import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "../Component/Nav";
import Home from "../Page/Home";
import LayOut from "../Layout/LayOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

export default router
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
        {
            index: true,
            element: <Home/>
        }
    ]
  },
 
]);

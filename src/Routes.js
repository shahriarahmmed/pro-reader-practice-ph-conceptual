import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Root from './components/Root'

const router = createBrowserRouter([
    {
     path: '/',
     element: <Root></Root>,
     errorElement: <ErrorPage></ErrorPage>,
     children: [
       {
         path: '/',
         element: <Home></Home>,
        },
       {
         path: '/home',
         element: <Home></Home>,
        },
        {
         path: '/about',
         element: <About></About>
        },  
     ]
    },
 ])

 export default router
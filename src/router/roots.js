import {createBrowserRouter} from "react-router-dom";
import ErrorPage from '../error-page';

import Layouts from "../layouts/Layouts";

import Landings from '../pages/Landings';

import Home from '../components/Home';
import LandingList from "../pages/LandingList";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            index: true,
            element: <Home/>,
        },
        {
            path: "/landings", 
            element: <Landings/>
        },
        {
          path: "/landings/list", 
          element: <LandingList/>
      },
      ]

    },
    
  ]);

  export default router
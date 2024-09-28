import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/index";
import ErrorPage from "../pages/error-page";
import Home from "../pages/home";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                errorElement: <ErrorPage />,
            }
        ]
    }
]);

export default Routes;

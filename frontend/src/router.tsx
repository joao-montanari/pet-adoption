import { createHashRouter } from "react-router-dom";

import Default from "@Layouts/Default";

import HomePage from "@Pages/home";

const routers = createHashRouter([
    {
        path: "",
        element: <Default/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            }
        ]
    }
]);

export default routers;
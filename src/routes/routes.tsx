import {createBrowserRouter} from "react-router";
import App from "../App";
import ControlPanel from "../pages/private/ControlPanel";
import Dashboard from "../pages/private/DashBoard";
import Inbox from "../pages/private/Inbox";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "control-panel",
        element: <ControlPanel/>,
        children:[
            {
                path: 'dashboard',
                element: <Dashboard/>
            },
            {
                path: 'inbox',
                element: <Inbox/>
            },
            {
                path: '',
                element: <Dashboard/>
            }
        ]
    },
    {
        path: "*",
        element: <App/>,
    },
]);
export default router;
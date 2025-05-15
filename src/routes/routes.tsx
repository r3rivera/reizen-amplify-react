import {createBrowserRouter} from "react-router";
import App from "../App";
import ControlPanel from "../pages/ControlPanel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "control-panel",
        element: <ControlPanel/>
    },
    {
        path: "*",
        element: <App/>,
    },
]);
export default router;
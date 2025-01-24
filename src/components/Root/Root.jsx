import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Nav />
            <Outlet />
        </div>
    );
};

export default Root;
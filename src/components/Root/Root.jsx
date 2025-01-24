import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const Root = () => {
    return (
        <div className="px-6 xl:max-w-7xl md:px-0 mx-auto">
            <Nav />
            <Outlet />
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="px-6 xl:max-w-7xl md:px-0 mx-auto">
                <Nav />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
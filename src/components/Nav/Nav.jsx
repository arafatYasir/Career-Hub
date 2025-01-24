import { NavLink } from "react-router-dom";

const Nav = () => {
    const links = <>
        <li className="text-xl"><NavLink to="/">Home</NavLink></li>
        <li className="text-xl"><NavLink to="/jobs">Jobs</NavLink></li>
        <li className="text-xl"><NavLink to="/applied">Applied Jobs</NavLink></li>
    </>
    return (
        <div className="navbar p-0 mt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href="/">
                    <img src="images/logo.webp" alt="Website Logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="text-white md:text-xl font-bold bg-linear-to-r from-[#7E90FE] to-[#9873FF] py-1.5 px-2 md:py-[19px] md:px-[28px] rounded-lg cursor-pointer">Start Appplying</button>
            </div>
        </div>
    );
};

export default Nav;
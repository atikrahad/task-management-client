import { Link, NavLink } from "react-router-dom";

const Navber = () => {

    const navber = <>
        <NavLink to="/">Home</NavLink>
        <NavLink >Featurs</NavLink>
        <NavLink >Contact us</NavLink>
    </>

  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
                navber
            }
          </ul>
        </div>
        
      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-5">
          {
            navber
          }
        </ul>
      </div>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn font-bold">Login</Link>
      </div>
    </div>
  );
};

export default Navber;

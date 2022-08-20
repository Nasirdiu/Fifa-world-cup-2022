import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      
    </>
  );
  return (
    <div>
      <div class="navbar bg-base-200 px-10">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <p class=" normal-case text-xl">Fifa world cup 2022</p>
        </div>
        <div class="navbar-end hidden lg:flex navbar-end">
          <ul class="menu menu-horizontal p-0">
            {menu}
          </ul>
        </div>
        <div class="">
          <button className="btn btn-outline btn-sm hover:bg-success"><Link to="/login">Login</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

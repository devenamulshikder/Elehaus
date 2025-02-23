import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";



const Navbar = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a>Shop</a>
                </li>
                <li>
                  <a>Pages</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl lg:text-4xl border-none hover:bg-none">
              Elehaus<span className="text-[#E52E06]">.</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex uppercase">
            <ul className="flex gap-10 items-center justify-center px-1 text-lg">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Pages</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex justify-center items-center gap-3">
              <CiSearch size={30} />
              <CiUser size={30} />
              <CiHeart size={30} />
              <PiShoppingCartThin size={30} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
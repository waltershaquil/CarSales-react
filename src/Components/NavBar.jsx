import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <Link to="/">Car Sales</Link>
        </div>
        <div className="space-x-4 text-white hidden md:flex">
          <Link
            to="/"
            className="hover:font-semibold hover:text-amber-300 hover:shadow-amber-400"
          >
            Home
          </Link>
          <Link
            to="/CarReg"
            className="hover:font-semibold hover:text-amber-300 hover:shadow-amber-400"
          >
            Car
          </Link>
          <Link
            to="/BuyerReg"
            className="hover:font-semibold hover:text-amber-300 hover:shadow-amber-400"
          >
            Buyer
          </Link>
          <Link
            to="/SaleReg"
            className="hover:font-semibold hover:text-amber-300 hover:shadow-amber-400"
          >
            Sales
          </Link>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu */}
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

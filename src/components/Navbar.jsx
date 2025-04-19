import React, { useContext, useState } from "react";
import logo from "../../public/grocery-illustration-download-in-svg-png-gif-file-formats--shopping-food-store-pack-drink-illustrations-7328923.webp";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAdminLoggedIn, setIsAdminLoggedIn, admin } =
    useContext(AuthContext);

  const handleAdminLogin = () => {
    navigate("/admin-login");
  };
  console.log("navbar", admin);
  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    alert("Logout Successfully");
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/");
    // toast.success("Logout Successfull")
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 p-4 shadow-lg sticky top-0 z-50">
      <ToastContainer />
      <div className="mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-extrabold flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <Link to="/" className="text-white">
            BulkMart
          </Link>
        </div>
        <div className="flex items-center hidden md:flex space-x-6">
          {!isAdminLoggedIn ? (
            <>
              <Link
                to="/"
                className="text-white hover:text-gray-200 text-xl font-medium"
              >
                Home
              </Link>
              <Link
                to="/order"
                className="text-white hover:text-gray-200 text-xl font-medium"
              >
                MyOrder
              </Link>
            </>
          ) : null}
          {isAdminLoggedIn ? (
            <>
              <Link
                to="/admin-dashboard"
                className="text-white hover:text-gray-200 text-xl font-medium"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded text-xl font-medium transition duration-300 ease-in-out"
              >
                Admin Logout
              </button>
              <div className="px-4 py-2 rounded-full bg-green-400">
                <h2 className="text-white text-xl font-medium">
                  {admin}
                </h2>
              </div>
            </>
          ) : (
            <button
              onClick={handleAdminLogin}
              className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded text-xl font-medium transition duration-300 ease-in-out"
            >
              Admin Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        {!isAdminLoggedIn ? (
          <>
            {/* <Link
                to="/"
                className="text-white hover:text-gray-200 text-xl font-medium"
              >
                Home
              </Link> */}
            <Link
              to="/order"
              className="text-white hover:text-gray-200 text-xl font-medium"
            >
              MyOrder
            </Link>
          </>
        ) : null}
        {isAdminLoggedIn ? (
          <>
            <Link
              to="/admin-dashboard"
              className="text-white hover:text-gray-200 text-xl font-medium mx-2"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded text-xl font-medium transition duration-300 ease-in-out"
            >
              Admin Logout
            </button>
            <h2 className="text-blue-900  text-xl font-medium mx-2">{admin}</h2>
          </>
        ) : (
          <button
            onClick={handleAdminLogin}
            className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded text-xl font-medium transition duration-300 ease-in-out"
          >
            Admin Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

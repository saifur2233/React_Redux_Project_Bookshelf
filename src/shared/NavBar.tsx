import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSun } from "react-icons/fa";
const NavBar = () => {
  const navigate = useNavigate();

  const [dark, setDark] = useState<boolean>(false);

  const handleDark = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("dark-mode", JSON.stringify(newDark));
  };

  useEffect(() => {
    const localDark = JSON.parse(
      localStorage.getItem("dark-mode") || "false"
    ) as boolean;
    setDark(localDark);
  }, []);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", dark ? "night" : "winter");
    }
  }, [dark]);

  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="font-bold text-primary" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-bold text-primary" to="/signup">
          SignUp
        </Link>
      </li>
      <li>
        <Link className="font-bold text-primary" to="/login">
          Login
        </Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            src="https://i.ibb.co/cxC11DF/logo.jpg"
            width="60"
            className="mr-2"
            alt="Logo"
          />
          <h1 className="font-bold text-3xl">Bookshelf</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn btn-primary">
          Get Started
        </Link>
        <button onClick={handleDark} className="btn btn-ghost btn-circle">
          <FaSun size={"2em"}></FaSun>
        </button>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
      >
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
      </label>
    </div>
  );
};

export default NavBar;

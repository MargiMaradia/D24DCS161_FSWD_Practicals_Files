import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>

      <button
        className="absolute top-4 right-4 text-white"
        onClick={toggleSidebar}
      >
        ✖
      </button>
      <nav className="mt-16 flex flex-col space-y-4 px-4">
        <Link to="/" onClick={toggleSidebar} className="hover:text-yellow-400">
          Home
        </Link>
        <Link
          to="/about"
          onClick={toggleSidebar}
          className="hover:text-yellow-400"
        >
          About
        </Link>
        <Link
          to="/services"
          onClick={toggleSidebar}
          className="hover:text-yellow-400"
        >
          Services
        </Link>
        <Link
          to="/contact"
          onClick={toggleSidebar}
          className="hover:text-yellow-400"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

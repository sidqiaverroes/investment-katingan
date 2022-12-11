import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen bg-white">
      <span>
        <h3 className="text-gray-800 text-8xl font-bold">404</h3>
        <h3 className="text-gray-500 text-2xl font-medium">Page Not Found</h3>
      </span>

      <span>
        <Link to="/">
          <button className="group flex flex-row gap-4 justify-start items-center px-8 py-3 rounded-lg text-white font-medium bg-birumud hover:bg-birumud2 shadow-md hover:shadow-lg">
            Go to Landing Page
            <i className="fa-solid fa-arrow-right group-hover:ml-2 " />
          </button>
        </Link>
      </span>
    </div>
  );
}

export default NotFound;

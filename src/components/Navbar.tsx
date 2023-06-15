import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-porto-sky-500 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl ml-48 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="/"
                    className="text-white hover:bg-porto-sky-700 hover:text-white px-3 py-2 rounded-lg"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/experience"
                    className="text-white hover:bg-porto-sky-700 hover:text-white px-3 py-2 rounded-lg"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:bg-porto-sky-500 hover:text-white focus:outline-none focus:text-blue-200"
              onClick={handleToggle}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="bg-porto-sky-500 mt-2 space-y-2">
            <li>
              <a
                href="/"
                className="text-white block px-4 py-2 rounded-lg hover:bg-porto-sky-700 hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/experience"
                className="text-white block px-4 py-2 rounded-lg hover:bg-porto-sky-700 hover:text-white"
              >
                Experience
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

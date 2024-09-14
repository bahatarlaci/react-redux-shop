import { useState } from "react";
import { FaBars, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2 border-gray">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">React Redux Shop</h1>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <FaBars size={25} />
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <div className="flex items-center border px-4 py-1 rounded-full mr-6">
              <input
                type="text"
                placeholder="Arama yapınız..."
                className="mr-2"
              />
              <FaSearch size={25} />
            </div>
            <FaHeart className="mr-6" size={25} />
            <div className="relative">
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-2 -right-2">
                0
              </span>
              <FaShoppingCart size={25} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40" : "max-h-0"
          }`}
      >
        <div className="p-4 border-t border-gray-200 flex justify-between">
          <div className="flex items-center border px-4 py-1 rounded-full mb-4">
            <input
              type="text"
              placeholder="Arama yapınız..."
              className="mr-2"
            />
            <FaSearch size={25} />
          </div>
          <div className="flex items-center mb-4">
            <FaHeart className="mr-6" size={25} />
            <div className="relative">
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-2 -right-2">
                0
              </span>
              <FaShoppingCart size={25} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
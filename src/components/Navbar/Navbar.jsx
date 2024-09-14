import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">React Redux Shop</h1>
        </div>
        <div className="flex items-center">
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
    </nav>
  );
};

export default Navbar;
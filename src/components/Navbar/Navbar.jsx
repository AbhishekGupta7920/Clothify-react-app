import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { IoMdNotifications } from "react-icons/io";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const cartItems = useSelector((store) => store.cartSlice.items);
  const totalCartItems = cartItems.reduce((val, item) => val + item.quantity, 0);

  const wishlistItems = useSelector((store) => store.wishlistSlice.items);
  const totalWishlistItems = wishlistItems.reduce(
    (val, item) => val + item.quantity,
    0
  );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (textValue.trim()) {
      navigate(`/searchResultsProducs?query=${encodeURIComponent(textValue)}`);
      setTextValue(""); // Clear input after navigating
    }
  };

  return (
    <div className="bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400">
      <div className="max-w-7xl mx-auto py-2 px-5 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="md:w-24 w-20" />
        </Link>

        {/* Search bar */}
        <form
          className="relative group hidden sm:block"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            className="w-[200px] sm:w-[200px] text-gray-800 group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
              text-sm focus:outline-none focus:border-1 focus:border-primary"
          />
          <button type="submit">
            <IoMdSearch className="text-slate-800 absolute top-1/2 -translate-y-1/2 right-3" />
          </button>
        </form>

        <div className="flex items-center gap-5">
          <nav className="hidden md:block">
            <ul className="flex items-center font-semibold text-xl gap-7">
              <Link to="/"><li>Home</li></Link>
              <Link to="/mens"><li>Mens</li></Link>
              <Link to="/womens"><li>Womens</li></Link>
              <Link to="/electronic"><li>Electronics</li></Link>
              <Link to="/jewellery"><li>Jewellery</li></Link>
              <Link to="/login"><FaUserCircle className="text-2xl" /></Link>
            </ul>
          </nav>

          {/* Cart icon */}
          <Link to="/cart" className="relative w-10">
            <ShoppingCart />
            <div className="bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white">
              {totalCartItems}
            </div>
          </Link>

          {/* Wishlist icon */}
          <Link to="/wishlist" className="relative w-10">
            <FaRegHeart className="text-2xl" />
            <div className="bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white">
              {totalWishlistItems}
            </div>
          </Link>

          {/* notifications icon */}
          <Link to="/notifications" className="relative w-10 hidden md:block">
            <IoMdNotifications className="text-2xl " />
            <div className="bg-red-500 w-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white">
              3
            </div>
          </Link>

          {/* Mobile hamburger icon */}
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden"
              size={30}
            />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;

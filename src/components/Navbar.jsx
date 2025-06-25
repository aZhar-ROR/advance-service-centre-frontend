import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_square.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-gradient-to-r from-indigo-950 via-blue-900 to-gray-900 text-white z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-8">
        
        {/* Left Side: Logo + Title */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full border-2 border-yellow-400 shadow-md"
          />
          <h1 className="text-2xl font-extrabold tracking-wide transition-transform transform hover:scale-105 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Advance Service Centre
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li 
              key={item} 
              className="relative cursor-pointer transition duration-300 hover:text-yellow-400 after:block after:content-[''] after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              <a href={`#${item.toLowerCase()}`} className="transition-all duration-300">{item}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-yellow-400 transition" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        className={`absolute w-full left-0 top-full bg-gray-900 md:hidden shadow-lg overflow-hidden ${
          isOpen ? "h-auto" : "h-0"
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ul className="flex flex-col items-center py-5 space-y-5 text-lg">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li 
              key={item} 
              className="cursor-pointer transition duration-300 hover:text-yellow-400"
            >
              <a href={`#${item.toLowerCase()}`} onClick={closeMenu} className="transition-all duration-300">{item}</a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
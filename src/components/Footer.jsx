import { Mail, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Company Info */}
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-xl font-bold hover:scale-105 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500" style={{ fontFamily: "Montserrat, sans-serif" }}>Advance Service Centre</h2>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Mail size={18} className="text-cyan-300" /> 
            <a href="mailto:contact.advanceservice@gmail.com" className="underline hover:text-cyan-300 transition">
              contact.advanceservice@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={18} className="text-cyan-300" /> 
            <a href="tel:+919933726932" className="underline hover:text-cyan-300 transition">
              +91 99337 26932
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-pink-500 transition transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://wa.me/919933726932" className="hover:text-green-500 transition transform hover:scale-110">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        {/* Developer Credit Ad */}
        <div className="bg-[#1e293b] text-white px-6 py-4 rounded-lg shadow-lg border border-cyan-400 backdrop-blur-md bg-opacity-30 hover:bg-opacity-40 transition transform hover:scale-105">
          <p className="text-md font-bold text-cyan-300">Developed by <span className="text-white">Azhar</span></p>
          <p className="flex items-center gap-2">
            <Mail size={18} className="text-cyan-300" /> 
            <a href="mailto:hello.azhar.dev@gmail.com" className="underline hover:text-cyan-300 transition">
              hello.azhar.dev@gmail.com
            </a>
          </p>
          {/* <p className="flex items-center gap-2">
            <Phone size={18} className="text-cyan-300" /> 
            <a href="tel:+917076404076" className="underline hover:text-cyan-300 transition">
              +91 70764 04076
            </a>
          </p> */}
        </div>
      </div>

      {/* Legal Links */}
      <div className="w-full mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <a
          href="/privacy-policy"
          className="text-yellow-400 hover:text-yellow-500 underline font-semibold transition duration-150"
        >
          Privacy Policy
        </a>
        <span className="hidden md:inline-block text-gray-400">|</span>
        <a
          href="/terms-and-conditions"
          className="text-yellow-400 hover:text-yellow-500 underline font-semibold transition duration-150"
        >
          Terms & Conditions
        </a>
      </div>

      {/* Copyright Section with Animation */}
      <div className="mt-6 text-center text-sm text-gray-400 opacity-0 animate-fade-in">
        &copy; {new Date().getFullYear()} Advance Service Centre. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
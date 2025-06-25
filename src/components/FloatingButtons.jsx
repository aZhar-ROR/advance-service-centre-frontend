import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Call Now Button */}
      <a 
        href="tel:+919876543210" 
        className="bg-blue-600 text-white flex items-center gap-2 px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <Phone size={20} /> Call Now
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-green-600 text-white flex items-center gap-2 px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
      >
        <MessageCircle size={20} /> WhatsApp
      </a>
    </div>
  );
};

export default FloatingButtons;
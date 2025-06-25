import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-face-2.jpg";
import { Wrench, Star, Users, ShieldCheck, X } from "lucide-react";

const sentence = "Precision. Care. Excellence.".split(" ");
const subtext = "Your trust, our expertise.";

const stats = [
  { id: 1, title: "Happy Customers", value: "10,000+", icon: Users },
  { id: 2, title: "Customer Ratings", value: "4.9/5", icon: Star },
  { id: 3, title: "Expert Technicians", value: "50+", icon: ShieldCheck },
  { id: 4, title: "Years of Experience", value: "15+", icon: Wrench }
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-indigo-900 via-blue-900 to-gray-900 relative py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-sm md:max-w-lg"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-wide">
            {sentence.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="inline-block mr-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p className="text-gray-300 mt-4 text-lg italic">{subtext}</motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-yellow-500 text-indigo-900 font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition flex items-center gap-2 text-lg mx-auto md:mx-0"
            onClick={() => setIsModalOpen(true)}
          >
            Book a Service
            <Wrench size={22} />
          </motion.button>
        </motion.div>

        {/* Right: Image */}
        <motion.div className="w-full max-w-[200px] md:max-w-[300px] bg-white rounded-2xl overflow-hidden border-4 border-yellow-500 shadow-2xl mx-auto md:mx-0">
          <img src={heroImage} alt="Service Center" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Book a Service</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
              <input type="text" placeholder="Your Phone" className="w-full p-2 border rounded" required />
              <textarea placeholder="Describe your issue" className="w-full p-2 border rounded" rows="4" required></textarea>
              <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Submit</button>
            </form>
          </div>
        </div>
      )}

            {/* Glass Cards - Statistics */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:flex justify-center gap-6 w-full max-w-lg md:max-w-4xl">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="glass-card w-36 h-36 md:w-40 md:h-40 p-5 flex flex-col justify-center items-center text-center rounded-xl backdrop-blur-lg bg-white/10 border border-white/30 shadow-lg"
          >
            <stat.icon size={32} className="text-yellow-400 mb-2" />
            <h3 className="text-lg md:text-xl text-white font-bold">{stat.value}</h3>
            <p className="text-gray-300 text-xs md:text-sm">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

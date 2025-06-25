import { motion } from "framer-motion";
import { Wrench, Wind, Flame } from "lucide-react"; // Icons

const Services = () => {
  const serviceList = [
    { 
      title: "LED TV Repair", 
      desc: "Fix screen issues, sound problems, motherboard failures, and more.",
      icon: <Wrench size={50} className="text-yellow-500" />
    },
    { 
      title: "AC Maintenance", 
      desc: "Cooling issues, gas refilling, regular servicing, and deep cleaning.",
      icon: <Wind size={50} className="text-blue-500" />
    },
    { 
      title: "Geyser Repair", 
      desc: "Fix heating issues, water leakage, thermostat problems, and wiring faults.",
      icon: <Flame size={50} className="text-red-500" />
    }
  ];

  return (
    <section id= "services" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-b from-white via-gray-100 to-white text-gray-900">
      <div className="container mx-auto flex flex-col items-center text-center">
        
        {/* Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>

        <p className="mt-4 text-gray-700 text-lg md:w-2/3">
          We specialize in professional repair and maintenance services for LED TVs, ACs, and Geysers. 
          Our experienced technicians ensure top-quality service with customer satisfaction as our priority.
        </p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg w-80 flex flex-col items-center space-y-6 border border-gray-300 hover:border-yellow-500 transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {service.icon}
              <h3 className="text-2xl font-semibold text-yellow-500">{service.title}</h3>
              <p className="text-gray-700 text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
import { motion } from "framer-motion";
import { Wrench, Wind, Flame } from "lucide-react"; // Icons

const Services = () => {
  const serviceList = [
    { 
      title: "LED & LED TV Repair", 
      desc: "Expert repair for all LED TV brands and models. We fix screen, sound, motherboard, power, and software issues. Doorstep service available.",
      icon: <Wrench size={50} className="text-yellow-500" />
    },
    { 
      title: "QLED TV Repair", 
      desc: "Specialized QLED TV repairs including quantum dot panel issues, display calibration, and smart features troubleshooting.",
      icon: <Wind size={50} className="text-blue-500" />
    },
    { 
      title: "OLED TV Repair", 
      desc: "Professional OLED TV service for burn-in, color accuracy, display, and advanced panel repairs. Genuine parts and expert technicians.",
      icon: <Flame size={50} className="text-red-500" />
    }
  ];

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-b from-white via-gray-100 to-white text-gray-900">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our TV Services
        </motion.h2>

        <p className="mt-4 text-gray-700 text-lg md:w-2/3">
          We specialize in professional repair and maintenance for LED, QLED, and O-LED TVs. Our experienced technicians ensure top-quality service for all major brands, with genuine parts and fast doorstep support.
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
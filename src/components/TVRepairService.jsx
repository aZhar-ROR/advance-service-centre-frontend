import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign, Wrench, Phone } from "lucide-react";
import FloatingButtons from "./FloatingButtons";
import heroImage from "../assets/tv-1.jpeg";

const TVRepairService = () => {
  const features = [
    {
      icon: <CheckCircle size={50} className="text-green-400" />,
      title: "Certified Technicians",
      desc: "Expert certified technicians with years of experience"
    },
    {
      icon: <Clock size={50} className="text-blue-400" />,
      title: "Quick Doorstep Service Across Your Area",
      desc: "Fast doorstep service with same-day availability"
    },
    {
      icon: <DollarSign size={50} className="text-yellow-400" />,
      title: "Affordable Pricing",
      desc: "Transparent and competitive pricing with no hidden charges"
    },
    {
      icon: <Wrench size={50} className="text-purple-400" />,
      title: "Same-Day Service Available for Most Repairs",
      desc: "Quick turnaround for most TV repair issues"
    }
  ];

  const services = [
    "Screen Repair & Replacement",
    "Sound & Audio Issues",
    "Panel & Display Problems", 
    "Remote Connectivity",
    "Software Updates",
    "Power Issues",
    "Hardware Fixes",
    "Installation Service"
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Main Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-8 py-16 bg-gradient-to-br from-indigo-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="w-full max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left space-y-4 lg:space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  Expert TV Repair
                </span>
                <br />
                <span className="text-white">at Your Doorstep</span>
              </h1>
              
              {/* Key Service Highlights - Bullet Points */}
              <motion.div 
                className="space-y-1 lg:space-y-3 my-4 lg:my-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {[
                  "✓ Certified Technicians",
                  "✓ Quick Doorstep Service", 
                  "✓ Affordable Pricing",
                  "✓ Same-Day Service"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 lg:gap-3 text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-yellow-400 text-lg lg:text-xl font-bold">•</span>
                    <span className="text-white font-medium text-sm lg:text-lg">{point}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Contact Number Card */}
              <motion.div 
                className="inline-flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-green-50 text-green-800 hover:bg-green-100 rounded-lg shadow-md transition-all duration-300 border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Phone size={18} className="text-green-600" />
                <a href="tel:+919933726932" className="text-sm lg:text-base font-medium text-green-800">
                  +91 99337 26932
                </a>
              </motion.div>

              {/* Key Features */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <p className="text-gray-300 text-sm lg:text-lg">
                  Complete TV repair service for all brands and models. From installation to hardware fixes, we keep your TV running smoothly.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex justify-center relative order-1 lg:order-2 mb-6 lg:mb-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img 
                src={heroImage} 
                alt="TV Repair Service" 
                className="w-3/5 max-w-sm lg:w-full lg:max-w-lg h-auto object-cover rounded-xl shadow-2xl border-4 border-yellow-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Specialize In Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                We Specialize In
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center space-y-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                Our team provides complete TV repair service covering every brand and model. From installation and software updates to hardware fixes and power issues, we make sure your TV runs smoothly without interruptions.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                We also handle TV screen repair, sound problems, panel issues, and remote connectivity - giving you an all-in-one solution under one roof.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                If you're searching for a reliable TV repair near you, our doorstep service ensures quick and hassle-free support. With expert technicians and genuine spare parts, we bring back your TV's performance like new.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="group bg-white p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <CheckCircle size={24} className="text-green-500 group-hover:text-green-600 transition-colors flex-shrink-0" />
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                      {service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Phone size={28} />
                <div className="text-left">
                  <p className="text-sm opacity-90">Need TV Repair?</p>
                  <a href="tel:+919933726932" className="text-xl font-bold">
                    Call +91 99337 26932
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FloatingButtons />
    </div>
  );
};

export default TVRepairService;

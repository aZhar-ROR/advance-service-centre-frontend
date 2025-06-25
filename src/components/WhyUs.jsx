import { motion } from "framer-motion";
import { ShieldCheck, Clock, Star, DollarSign, Settings2, Smile } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} className="text-gray-900" />,
    title: "Expert Technicians",
    description: "Skilled professionals ensuring precise appliance repairs.",
  },
  {
    icon: <Star size={40} className="text-gray-900" />,
    title: "Quality Service Guaranteed",
    description: "We use advanced tools and original parts for durable repairs.",
  },
  {
    icon: <Settings2 size={40} className="text-gray-900" />,
    title: "Genuine Spare Parts",
    description: "Only certified, high-quality spare parts for maximum performance.",
  },
  {
    icon: <Clock size={40} className="text-gray-900" />,
    title: "Timely Repairs",
    description: "Swift service to ensure minimal disruption to your routine.",
  },
  {
    icon: <DollarSign size={40} className="text-gray-900" />,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden costs. No advance fees.",
  },
  {
    icon: <Smile size={40} className="text-gray-900" />,
    title: "Customer Satisfaction Guarantee",
    description: "We stand by our work with a full satisfaction guarantee.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-blue-900 to-gray-900 text-gray-100">
      <div className="container mx-auto px-6 text-center">
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>

        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          At <strong className="text-yellow-500">Advance Service Centre</strong>, we take pride in providing expert repairs, ensuring **reliability, affordability, and customer satisfaction.**
        </p>

        {/* Feature Grid (Fixes Desktop Alignment) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Circle Icon Wrapper */}
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full shadow-lg">
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-2 max-w-xs">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
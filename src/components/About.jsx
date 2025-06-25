import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tv1 from "../assets/tv-1.jpeg";
import ac1 from "../assets/ac-1.jpeg";
import geyser1 from "../assets/geyser-1.jpeg";

// Brand Logos
import samsung from "../assets/samsung.png";
import lg from "../assets/lg.png";
import sony from "../assets/sony.png";
import panasonic from "../assets/panasonic.png";
import whirlpool from "../assets/whirlpool.png";
import hitachi from "../assets/hitachi.png";
import daikin from "../assets/daikin.png";
import bosch from "../assets/bosch.png";

const images = [tv1, ac1, geyser1];

const brands = [
  { name: "Samsung", logo: samsung },
  { name: "LG", logo: lg },
  { name: "Sony", logo: sony },
  { name: "Panasonic", logo: panasonic },
  { name: "Whirlpool", logo: whirlpool },
  { name: "Hitachi", logo: hitachi },
  { name: "Daikin", logo: daikin },
  { name: "Bosch", logo: bosch },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-b from-white via-gray-100 to-white text-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left: Swiper Carousel */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-xl border-4 border-yellow-500"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={src} 
                  alt={`Slide ${index}`} 
                  className="w-full h-[350px] md:h-[400px] object-cover rounded-xl shadow-lg" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div 
          className="w-full md:w-1/2 space-y-6 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Who We Are
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong className="text-yellow-500">Advance Service Centre</strong>, we are committed to delivering 
            expert repairs and reliable solutions for your home appliances, ensuring top-notch service 
            every time.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <p className="text-gray-700 text-lg">
                Specializing in <strong>LED TVs, ACs, and Geysers</strong> with precision repairs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <p className="text-gray-700 text-lg">
                Trusted by <strong>10,000+ happy customers</strong> for quality and efficiency.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <p className="text-gray-700 text-lg">
                Over <strong>15 years of experience</strong> in appliance service and maintenance.
              </p>
            </div>
          </div>

          {/* Brands We Work With (Now Integrated) */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Brands We Work With
            </h3>
            <p className="text-gray-600 mt-2 text-lg">
              We specialize in servicing top brands for TVs, ACs, and Washing Machines.
            </p>

            {/* Brand Logos Grid */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.1 }} 
                  className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg border border-gray-200"
                >
                  <div className="w-20 h-20 bg-white p-2 rounded-lg flex items-center justify-center shadow-sm">
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                  </div>
                  <p className="mt-2 font-semibold text-gray-800">{brand.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-yellow-500 text-indigo-900 font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition flex items-center gap-2 text-lg"
          >
            Learn More
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
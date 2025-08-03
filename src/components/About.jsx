import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import LazyImage from "./LazyImage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import tv1 from "../assets/tv-1.jpeg";
import tv2 from "../assets/tv-2.webp"; // Assuming this is a valid image format
import tv3 from "../assets/tv-3.webp"; // Assuming this is a valid image format
import tv4 from "../assets/tv-4.webp"; // Assuming this is a valid image format

const images = [tv1, tv2, tv3, tv4];

const brands = [
  { name: "Samsung", route: "samsung-tv-service-near-me" },
  { name: "LG", route: "lg-tv-service-near-me" },
  { name: "Sony", route: "sony-tv-service-near-me" },
  { name: "TCL", route: "tcl-tv-service-near-me" },
  { name: "Hisense", route: "hisense-tv-service-near-me" },
  { name: "Xiaomi", route: "mi-tv-service-near-me" },
  { name: "OnePlus", route: "oneplus-tv-service-near-me" },
  { name: "Panasonic", route: "panasonic-tv-service-near-me" },
  { name: "Vu", route: "vu-tv-service-near-me" },
  { name: "iFFALCON", route: "iffalcon-tv-service-near-me" },
  { name: "Sharp", route: "sharp-tv-service-near-me" },
  { name: "Philips", route: "philips-tv-service-near-me" }
];

const About = () => {
  const navigate = useNavigate();

  const handleBrandClick = (brand) => {
    navigate(`/${brand.route}`);
    window.scrollTo(0, 0);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-b from-white via-gray-100 to-white text-gray-900"
    >
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
                <LazyImage
                  src={src}
                  alt={`Service ${index + 1}`}
                  className="w-full h-[350px] md:h-[400px] object-cover rounded-xl shadow-lg"
                  rootMargin="200px"
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
            At{" "}
            <strong className="text-yellow-500">Advance Service Centre</strong>,
            we are committed to delivering expert repairs and reliable solutions
            for your home appliances, ensuring top-notch service every time.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <p className="text-gray-700 text-lg">
                Specializing in{" "}
                <strong>LCD, LED, QLED, and OLED TVs</strong> with precision
                repairs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <p className="text-gray-700 text-lg">
                Trusted by <strong>10,000+ happy customers</strong> for quality
                and efficiency.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <p className="text-gray-700 text-lg">
                Over <strong>15 years of experience</strong> in appliance
                service and maintenance.
              </p>
            </div>
          </div>

          {/* Brands We Work With */}
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
              We specialize in servicing these premium TV brands with expert care and genuine parts.
            </p>

            {/* Brand Names Grid */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center h-20 bg-white text-gray-800 font-semibold text-lg rounded-lg border border-yellow-200 shadow-sm hover:shadow-lg hover:border-yellow-400 p-4 text-center cursor-pointer transition-all duration-300"
                  onClick={() => handleBrandClick(brand)}
                >
                  {brand.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
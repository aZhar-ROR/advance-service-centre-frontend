import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FloatingButtons from "./FloatingButtons";
import { submitContactForm } from "../utils/submitContactForm";

const brandInfo = {
  samsung: {
    name: "Samsung",
    description: "Expert Samsung TV repair services for all models including LED, QLED, and Smart TVs. We specialize in screen repairs, panel replacements, backlight issues, smart features troubleshooting, and more.",
    features: [
      "Certified Samsung TV repair experts",
      "Genuine Samsung spare parts",
      "All Samsung TV models supported",
      "Smart TV software fixes",
      "QLED & LED panel repairs",
      "Power & display issues",
      "Sound system repairs",
      "Remote control fixes"
    ]
  },
  lg: {
    name: "LG",
    description: "Professional LG TV repair services covering OLED, NanoCell, and WebOS TVs. Our technicians are skilled in handling all LG-specific issues with genuine parts and expert solutions.",
    features: [
      "LG OLED specialist repairs",
      "WebOS troubleshooting",
      "NanoCell display fixes",
      "Original LG components",
      "Smart features support",
      "Screen & panel repairs",
      "Audio system service",
      "Magic Remote repairs"
    ]
  },
  sony: {
    name: "Sony",
    description: "Comprehensive Sony TV repair services for Bravia, LED, and Android TVs. We provide expert solutions for all Sony TV problems with authentic parts and experienced technicians.",
    features: [
      "Sony Bravia experts",
      "Android TV fixes",
      "4K display repairs",
      "Genuine Sony parts",
      "Acoustic system repairs",
      "Processor issues fixed",
      "HDR display calibration",
      "Remote programming"
    ]
  },
  tcl: {
    name: "TCL",
    description: "Reliable TCL TV repair services for all models. Our technicians are experienced with TCL's smart features, display technologies, and common issues.",
    features: [
      "TCL Android TV repairs",
      "QLED panel service",
      "Smart hub fixes",
      "Display calibration",
      "Audio repairs",
      "Power system fixes",
      "Remote control service",
      "Software updates"
    ]
  },
  hisense: {
    name: "Hisense",
    description: "Expert Hisense TV repair services for ULED, LED, and Smart TVs. We handle all Hisense-specific issues with precision and care.",
    features: [
      "ULED display repairs",
      "Smart TV troubleshooting",
      "VIDAA OS support",
      "Panel replacement",
      "Backlight fixes",
      "Sound system repairs",
      "Remote programming",
      "Software updates"
    ]
  },
  xiaomi: {
    name: "Xiaomi",
    description: "Professional Xiaomi TV repair services for Mi TV and Smart TV models. Our experts handle PatchWall OS issues and hardware repairs.",
    features: [
      "PatchWall OS fixes",
      "Display repairs",
      "Smart features support",
      "Audio system service",
      "Panel replacement",
      "Bluetooth issues",
      "Remote control fixes",
      "Software updates"
    ]
  },
  oneplus: {
    name: "OnePlus",
    description: "Specialized OnePlus TV repair services for all models. We handle everything from display issues to smart features with expertise.",
    features: [
      "QLED panel repairs",
      "Android TV fixes",
      "Gamma Engine tuning",
      "Audio repairs",
      "Smart remote fixes",
      "Display calibration",
      "Software updates",
      "Connectivity issues"
    ]
  },
  panasonic: {
    name: "Panasonic",
    description: "Expert Panasonic TV repair services for all models. Our technicians are skilled in handling both modern and legacy Panasonic TVs.",
    features: [
      "LED/LCD repairs",
      "Smart TV fixes",
      "Panel replacement",
      "Sound system service",
      "Power supply repairs",
      "Remote programming",
      "Software updates",
      "Display calibration"
    ]
  },
  vu: {
    name: "Vu",
    description: "Professional Vu TV repair services for all models. We specialize in handling Vu-specific technologies and common issues.",
    features: [
      "Premium LED repairs",
      "Android TV fixes",
      "Panel replacement",
      "Sound system repairs",
      "Smart features support",
      "Remote control service",
      "Software updates",
      "Display calibration"
    ]
  },
  iffalcon: {
    name: "iFFALCON",
    description: "Reliable iFFALCON TV repair services for all models. Our experts handle both hardware and software issues with precision.",
    features: [
      "Smart TV repairs",
      "Display fixes",
      "Android TV support",
      "Audio system service",
      "Panel replacement",
      "Remote programming",
      "Software updates",
      "Connectivity fixes"
    ]
  },
  sharp: {
    name: "Sharp",
    description: "Expert Sharp TV repair services for all models. We provide comprehensive solutions for all Sharp TV-related issues.",
    features: [
      "Aquos display repairs",
      "Smart TV fixes",
      "Panel replacement",
      "Sound system service",
      "Power supply repairs",
      "Remote programming",
      "Software updates",
      "Picture quality tuning"
    ]
  },
  philips: {
    name: "Philips",
    description: "Professional Philips TV repair services for all models including Ambilight TVs. We handle all Philips-specific technologies and issues.",
    features: [
      "Ambilight repairs",
      "LED/LCD fixes",
      "Android TV support",
      "Panel replacement",
      "Sound system service",
      "Smart features fixes",
      "Remote programming",
      "Software updates"
    ]
  }
};

const locationInfo = {
  kolkata: {
    name: "Kolkata",
    areas: ["Salt Lake", "New Town", "Park Street", "Ballygunge", "Bhawanipur", "Gariahat", "Behala", "Garia"],
    description: "Your trusted TV repair service center in Kolkata. We cover all areas with doorstep service."
  },
  howrah: {
    name: "Howrah",
    areas: ["Howrah Maidan", "Shibpur", "Santragachi", "Salkia", "Belur", "Liluah", "Bally", "Kadamtala"],
    description: "Expert TV repair services across Howrah. Fast and reliable doorstep service available."
  },
  hooghly: {
    name: "Hooghly",
    areas: ["Chinsurah", "Bandel", "Chandannagar", "Srirampore", "Uttarpara", "Konnagar", "Rishra", "Serampore"],
    description: "Professional TV repair services throughout Hooghly district. Experienced technicians at your doorstep."
  }
};

const getRouteInfo = (pathname) => {
  const path = pathname.substring(1); // Remove leading slash
  const isNearMe = path.includes('near-me');
  
  let brand = '';
  let location = '';
  
  if (isNearMe) {
    // Handle near-me routes
    brand = path.split('-tv-service-near-me')[0];
    location = 'near-me';
  } else {
    // Handle location-specific routes
    const parts = path.split('-tv-service-');
    brand = parts[0];
    location = parts[1];
  }

  return {
    brand,
    location,
    isNearMe
  };
};

const BrandServiceCenter = () => {
  const { pathname } = useLocation();
  const { brand, location, isNearMe } = getRouteInfo(pathname);
  
  const brandData = brandInfo[brand] || brandInfo.samsung;
  const locationData = isNearMe ? {
    name: "Your Nearby Location",
    areas: ["Kolkata", "Howrah", "Hooghly"],
    description: "We provide doorstep service across Kolkata, Howrah, and Hooghly. Our expert technicians are just a call away."
  } : locationInfo[location] || locationInfo.kolkata;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: `${brandData.name} TV Repair`,
    fullAddress: "",
    message: "",
    formType: "service_request"
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    const response = await submitContactForm(formData);
    setLoading(false);
    setFeedback(response.message);
    if (response.success) {
      setFormData({
        name: "",
        phone: "",
        issue: `${brandData.name} TV Repair`,
        fullAddress: "",
        message: "",
        formType: "service_request"
      });
      setTimeout(() => setFeedback(null), 2000);
    }
  };

  return (
    <div>
      <section className="min-h-[100vh] flex flex-col items-center justify-center px-2 sm:px-6 py-8 sm:py-16 bg-gradient-to-br from-indigo-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4 sm:mb-6 leading-tight drop-shadow-lg text-center">
            {isNearMe ? 
              `${brandData.name} TV Service Near You` :
              `${brandData.name} TV Service Centre in ${locationData.name}`
            }
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-2xl mx-auto text-white/90 text-center">
            {isNearMe ?
              `Authorized ${brandData.name} TV repair and service center near you. Expert technicians, genuine parts, doorstep service.` :
              `Authorized ${brandData.name} TV repair and service center in ${locationData.name}. Expert technicians, genuine parts, doorstep service.`
            }
          </p>

          <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto text-blue-100 text-center">
            {brandData.description}
            {isNearMe ?
              ` We provide services across Kolkata, Howrah, and Hooghly regions.` :
              ` We provide services across ${locationData.name}: ${locationData.areas.join(", ")}.`
            }
          </p>

          <div className="mb-8 w-full flex justify-center">
            <div className="backdrop-blur-md bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-50 border border-yellow-200 rounded-3xl shadow-2xl p-8 flex flex-col items-center w-full max-w-md">
              <h2 className="text-lg sm:text-xl font-bold mb-6 text-blue-900 text-center">Our {brandData.name} TV Services in {locationData.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {brandData.features.map(feature => (
                  <div key={feature} className="flex items-center bg-yellow-100/80 rounded-xl shadow hover:shadow-lg border border-yellow-200 px-3 py-2">
                    <span className="text-blue-900 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <form className="backdrop-blur-md bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-50 border border-yellow-200 rounded-3xl shadow-2xl p-8 flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
              <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 text-center">Book {brandData.name} TV Repair in {locationData.name}</h2>
              <div className="flex flex-col gap-2">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  className="w-full p-2.5 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-base bg-white/80 text-blue-900" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                />
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="Phone Number" 
                  className="w-full p-2.5 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-base bg-white/80 text-blue-900" 
                  required 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
                <input 
                  type="text" 
                  name="fullAddress" 
                  placeholder="Full Address" 
                  className="w-full p-2.5 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-base bg-white/80 text-blue-900" 
                  required 
                  value={formData.fullAddress} 
                  onChange={handleChange} 
                />
                <textarea 
                  name="message" 
                  placeholder="Describe the issue with your TV" 
                  className="w-full p-2.5 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-base bg-white/80 text-blue-900" 
                  rows="3" 
                  required 
                  value={formData.message} 
                  onChange={handleChange}
                ></textarea>
              </div>
              {feedback && (
                <p className={`text-sm mb-1 text-center ${feedback.includes("Success") ? "text-green-600" : "text-red-600"}`}>
                  {feedback}
                </p>
              )}
              <button 
                type="submit" 
                className="w-full bg-yellow-500 text-white py-2.5 rounded-lg font-bold shadow hover:bg-yellow-600 hover:scale-[1.02] transition disabled:opacity-50 text-base sm:text-lg" 
                disabled={loading}
              >
                {loading ? "Submitting..." : "Book Repair"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <FloatingButtons />
    </div>
  );
};

export default BrandServiceCenter;

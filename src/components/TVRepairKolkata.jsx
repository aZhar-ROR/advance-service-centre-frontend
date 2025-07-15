import React from "react";
import FloatingButtons from "./FloatingButtons";
import heroImage from "../assets/tv_reparing01.png";

const TVRepairKolkata = () => (
  <div>
    <section className="min-h-[100vh] flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-indigo-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6">TV Repair Services in Kolkata</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Fast, reliable LED TV repairs & installation for all major brands. Serving Kolkata with expert technicians and guaranteed satisfaction.
        </p>
        <img src={heroImage} alt="TV Repair Kolkata" className="mx-auto w-auto h-40 md:h-56 lg:h-64 object-contain rounded-xl shadow-xl border-4 border-yellow-500 mb-8" />
        <a href="#contact" className="px-8 py-4 bg-yellow-500 text-indigo-900 font-bold rounded-full shadow-lg hover:bg-yellow-600 transition text-lg">Book Your TV Service Now</a>
      </div>
    </section>
    <FloatingButtons />
  </div>
);

export default TVRepairKolkata;

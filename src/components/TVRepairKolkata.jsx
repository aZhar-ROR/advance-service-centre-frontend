import React, { useState } from "react";
import FloatingButtons from "./FloatingButtons";
import heroImage from "../assets/tv_reparing01.png";
import { submitContactForm } from "../utils/submitContactForm";

const TVRepairKolkata = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "TV Repair",
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
        issue: "TV Repair",
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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4 sm:mb-6 leading-tight drop-shadow-lg text-center">TV Repair Services in Kolkata</h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-2xl mx-auto text-white/90 text-center">
            Fast, reliable LED TV repairs & installation for all major brands. Serving Kolkata with expert technicians and guaranteed satisfaction.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto text-blue-100 text-center">
            Looking for the best TV repair service in Kolkata? Our certified technicians provide doorstep LED, LCD, and Smart TV repairs for Samsung, LG, Sony, MI, and more. We offer same-day service, genuine parts, and a satisfaction guarantee. Whether your TV has no display, sound issues, or needs installation, we cover all Kolkata neighborhoods. Book your TV repair online and enjoy transparent pricing, expert support, and fast turnaround. Trusted by thousands of happy customers in Kolkata.
          </p>
          <img src={heroImage} alt="TV Repair Kolkata" className="mx-auto w-full max-w-xs sm:max-w-md h-32 sm:h-40 md:h-56 lg:h-64 object-contain rounded-xl shadow-2xl border-4 border-yellow-500 mb-4 sm:mb-6" />
          <div className="mb-8 w-full flex justify-center">
            <div className="backdrop-blur-md bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-50 border border-yellow-200 rounded-3xl shadow-2xl p-8 flex flex-col items-center w-full max-w-md">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-7 text-yellow-500 drop-shadow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.88 3.549A9 9 0 1021 12.001M21 12V7.5a.5.5 0 00-.5-.5H16" /></svg>
                <span className="text-blue-900 font-extrabold text-lg sm:text-xl tracking-wide">Brands We Service</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {["Samsung","LG","Sony","TCL","MI","Lloyd","Kodak","Toshiba","Panasonic","Whirlpool","Hitachi","Daikin"].map(brand => (
                  <div key={brand} className="flex items-center justify-center bg-yellow-100/80 rounded-xl shadow hover:shadow-lg border border-yellow-200 px-3 py-2 font-semibold text-blue-900 text-sm sm:text-base transition-all duration-200 cursor-pointer hover:bg-yellow-200/80">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <form className="backdrop-blur-md bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-50 border border-yellow-200 rounded-3xl shadow-2xl p-8 flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
              <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-blue-900 text-center">Contact Us</h2>
              <div className="flex flex-col gap-2">
                <input type="text" name="name" placeholder="Full Name" className="w-full p-2.5 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-base bg-white/80 text-blue-900" required value={formData.name} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone Number" className="w-full p-2.5 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-base bg-white/80 text-blue-900" required value={formData.phone} onChange={handleChange} />
                <input type="text" name="fullAddress" placeholder="Full Address" className="w-full p-2.5 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-base bg-white/80 text-blue-900" required value={formData.fullAddress} onChange={handleChange} />
                <textarea name="message" placeholder="Describe the issue" className="w-full p-2.5 border border-yellow-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition text-base bg-white/80 text-blue-900" rows="3" required value={formData.message} onChange={handleChange}></textarea>
              </div>
              {feedback && (
                <p className={`text-sm mb-1 text-center ${feedback.includes("Success") ? "text-green-600" : "text-red-600"}`}>{feedback}</p>
              )}
              <button type="submit" className="w-full bg-yellow-500 text-white py-2.5 rounded-lg font-bold shadow hover:bg-yellow-600 hover:scale-[1.02] transition disabled:opacity-50 text-base sm:text-lg" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <FloatingButtons />
    </div>
  );
};

export default TVRepairKolkata;

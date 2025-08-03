import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons"; 
import WhyUs from "./components/WhyUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import TVRepairKolkata from "./components/TVRepairKolkata";
import TVRepairHowrah from "./components/TVRepairHowrah";
import TVRepairHooghly from "./components/TVRepairHooghly";
import BrandServiceCenter from "./components/BrandServiceCenter";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="mx-auto pt-16">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <WhyUs />
              <Services />
              <Contact />
            </>
          } />
          <Route path="/tv-repair-services-in-kolkata" element={<TVRepairKolkata />} />
          <Route path="/tv-repair-services-in-howrah" element={<TVRepairHowrah />} />
          <Route path="/tv-repair-services-in-hooghly" element={<TVRepairHooghly />} />
          
          <Route path="/samsung-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/lg-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/sony-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/tcl-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/hisense-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/mi-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/oneplus-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/panasonic-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/vu-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/iffalcon-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/sharp-tv-service-near-me" element={<BrandServiceCenter />} />
          <Route path="/philips-tv-service-near-me" element={<BrandServiceCenter />} />


          <Route path="/samsung-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/lg-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/sony-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/tcl-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/hisense-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/mi-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/oneplus-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/panasonic-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/vu-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/iffalcon-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/sharp-tv-service-kolkata" element={<BrandServiceCenter />} />
          <Route path="/philips-tv-service-kolkata" element={<BrandServiceCenter />} />


          <Route path="/samsung-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/lg-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/sony-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/tcl-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/hisense-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/mi-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/oneplus-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/panasonic-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/vu-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/iffalcon-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/sharp-tv-service-howrah" element={<BrandServiceCenter />} />
          <Route path="/philips-tv-service-howrah" element={<BrandServiceCenter />} />


          <Route path="/samsung-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/lg-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/sony-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/tcl-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/hisense-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/mi-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/oneplus-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/panasonic-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/vu-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/iffalcon-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/sharp-tv-service-hooghly" element={<BrandServiceCenter />} />
          <Route path="/philips-tv-service-hooghly" element={<BrandServiceCenter />} />

          
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
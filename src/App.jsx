import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons"; 
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="mx-auto pt-16">
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Contact />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../utils/submitContactForm";
const phoneRegex = /^\+\d{1,3}\d{7,14}$/;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitContactForm({
      ...formData,
      form_type: "contact",
    });
    setStatus(result.message);
    setError(!result.success);
    if (result.success) {
      setFormData({ name: "", phone: "", message: "" });
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-900">
      <motion.div
        className="container mx-auto flex flex-col items-center text-center max-w-lg bg-white p-10 shadow-2xl rounded-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h2>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone (with country code)"
            className={`w-full p-3 border rounded-lg ${!phoneRegex.test(formData.phone) && formData.phone ? 'border-red-500' : ''}`}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {!phoneRegex.test(formData.phone) && formData.phone && (
            <p className="text-red-500 text-sm mt-1">Invalid phone number format. Use +91XXXXXXXXXX.</p>
          )}
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className={`mt-4 text-lg ${error ? "text-red-500" : "text-green-500"}`}>
            {status}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
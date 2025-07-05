import { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../utils/submitContactForm";

  const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitContactForm({ ...formData, formType: "Contact Form" });
      setStatus(response.message);
      setError(!response.success);

      if (response.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Try again later.");
      setError(true);
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
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className={'w-full p-3 border rounded-lg'}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 border rounded-lg"
            value={formData.subject}
            onChange={handleChange}
            required
          />
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
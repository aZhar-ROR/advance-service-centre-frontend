import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <section className="min-h-screen px-6 py-16 bg-gradient-to-b from-white via-yellow-50 to-white text-gray-900">
    <div className="container mx-auto max-w-3xl p-8 rounded-2xl shadow-2xl border border-yellow-400">
      <h1 className="text-5xl font-extrabold mb-8 text-yellow-500 text-center">Privacy Policy</h1>
      <p className="mb-6 text-lg text-gray-700 text-center">Effective Date: July 15, 2025</p>
      <p className="mb-6 text-lg">Your privacy is important to us. This Privacy Policy explains how Advance Service Centre collects, uses, and protects your information when you use our services.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        <li>Personal information (name, email, phone number, address)</li>
        <li>Usage data (pages visited, time spent, device information)</li>
        <li>Cookies and tracking technologies</li>
      </ul>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">How We Use Information</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        <li>To provide and improve our services</li>
        <li>To respond to inquiries and customer support requests</li>
        <li>To send important updates and marketing communications (with consent)</li>
      </ul>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Cookies</h2>
      <p className="mb-6">We use cookies to enhance your experience. You can control cookie preferences in your browser settings.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Third-Party Services</h2>
      <p className="mb-6">We may use third-party services (e.g., analytics, payment processors) that collect, use, and share information according to their own privacy policies.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Data Protection</h2>
      <p className="mb-6">We implement security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Your Rights</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        <li>Access, update, or delete your personal information</li>
        <li>Withdraw consent for marketing communications</li>
        <li>Contact us for any privacy-related concerns</li>
      </ul>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Changes to This Policy</h2>
      <p className="mb-6">We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Contact Us</h2>
      <p className="mb-2">If you have any questions about our Privacy Policy, please contact us at <a href="mailto:info@advanceservicecentre.com" className="text-yellow-700 underline">info@advanceservicecentre.com</a>.</p>
    </div>
  </section>
);

export default PrivacyPolicy;

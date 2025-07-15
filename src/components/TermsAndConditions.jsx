import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => (
  <section className="min-h-screen px-6 py-16 bg-gradient-to-b from-white via-yellow-50 to-white text-gray-900">
    <div className="container mx-auto max-w-3xl p-8 rounded-2xl shadow-2xl border border-yellow-400">
      <h1 className="text-5xl font-extrabold mb-8 text-yellow-500 text-center">Terms and Conditions</h1>
      <p className="mb-6 text-lg text-gray-700 text-center">Effective Date: July 15, 2025</p>
      <p className="mb-6 text-lg">Please read these Terms and Conditions carefully before using Advance Service Centre's website and services.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Acceptance of Terms</h2>
      <p className="mb-6">By accessing or using our website, you agree to be bound by these terms. If you do not agree, please do not use our services.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Use of Services</h2>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        <li>Use our services only for lawful purposes</li>
        <li>Do not misuse, copy, or distribute our content without permission</li>
        <li>Do not attempt to disrupt or harm our website or services</li>
      </ul>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Intellectual Property</h2>
      <p className="mb-6">All content, trademarks, and logos are the property of Advance Service Centre or its licensors. Unauthorized use is prohibited.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Limitation of Liability</h2>
      <p className="mb-6">We are not liable for any direct, indirect, or consequential damages arising from the use of our services.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Third-Party Links</h2>
      <p className="mb-6">Our website may contain links to third-party sites. We are not responsible for their content or privacy practices.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Changes to Terms</h2>
      <p className="mb-6">We may update these Terms and Conditions at any time. Changes will be posted on this page with a revised effective date.</p>
      <h2 className="text-2xl font-bold mt-10 mb-3 text-yellow-600">Contact Us</h2>
      <p className="mb-2">If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:info@advanceservicecentre.com" className="text-yellow-700 underline">info@advanceservicecentre.com</a>.</p>
    </div>
  </section>
);

export default TermsAndConditions;

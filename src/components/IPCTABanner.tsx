"use client";

import React,{ useState } from "react";
export function IPCTABanner() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isHuman, setIsHuman] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHuman) {
      alert("Please confirm you are human.");
      return;
    }
    // Handle form submission logic here
    alert(`Thank you, ${name}! We will contact you soon.`);
    // Reset form
    setName("");
    setEmail("");
    setNumber("");
    setIsHuman(false);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-[#FF4D00] to-[#C1272D]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left side text */}
        <div className="text-white space-y-6">
          <h2 className="text-5xl font-bold">Let’s Secure the Future Together</h2>

          <ul className="list-disc list-inside space-y-3 text-lg max-w-lg">
            <li>Trusted in 153+ Countries</li>
            <li>Supporting 1000+ Start-ups, MSMEs, Individuals, Institutions & MNCs</li>
            <li>Free Patent Cost Calculator – Get Instant Estimates for India, USA & Global Filings</li>
            <li>Government-Authorized Indian Patent Agents</li>
            <li>Team of 80+ In-House Patent Attorneys & Tech Experts (India & US)</li>
            <li>Seamless Patent Filing in India, USA & Internationally</li>
            <li>Competitive & Transparent Pricing</li>
          </ul>
        </div>

        {/* Right side form */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-gray-900">Free Consultation</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="number" className="block text-gray-700 font-medium mb-2">
                Number
              </label>
              <input
                id="number"
                type="tel"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex items-center">
              <input
                id="human-check"
                type="checkbox"
                checked={isHuman}
                onChange={() => setIsHuman(!isHuman)}
                className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="human-check" className="ml-3 block text-gray-700 text-lg select-none">
                I am not a robot
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF4D00] to-[#C1272D] text-white font-semibold py-4 rounded-lg hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
import React from "react";

const AboutUsHome = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
      {/* Left - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="./home/about.jpg"
          alt="About Nextgen"
          className="rounded-2xl shadow-lg w-full h-[350px] md:h-[400px] object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 space-y-5">
        <h2 className="text-3xl font-bold text-[#333]">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          Nextgen (Pvt) Ltd. is a trusted visa consultancy and global travel
          solutions provider, simplifying immigration, tourism, and business
          expansion with expert support and cutting-edge tech.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Visa & Immigration Experts</li>
          <li>Global Presence in Asia, Europe, Middle East</li>
          <li>Tech-Enabled Solutions</li>
          <li>Client-Centric & Multilingual Team</li>
        </ul>
        <button className="bg-[#88AD35] hover:bg-[#6e8f2c] text-white px-5 py-2 rounded-full font-semibold transition-all duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUsHome;

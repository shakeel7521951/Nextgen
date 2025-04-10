import React from 'react';

const Header = () => {
  return (
    <div className="relative h-[100vh] flex justify-center items-center">
      <img
        src="./home/header.jpg"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
        <p className="text-white text-lg md:text-xl font-medium mb-2">Welcome to Nextgen (Pvt) Ltd.</p>
        <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-6">
          Your Trusted Partner for Global Visa & Travel Solutions
        </h1>
        <button className="bg-[#88AD35] hover:bg-[#6e8b2a] transition-all rounded-full cursor-pointer text-white px-6 py-3 font-semibold text-lg shadow-md">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;

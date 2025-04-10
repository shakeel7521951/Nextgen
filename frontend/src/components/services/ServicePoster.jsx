import React from "react";

const ServicePoster = () => {
  return (
    <div className="pt-8">
      <div className="relative w-full h-[500px] md:h-[400px] lg:h-[500px]">
        {/* Background Image */}
        <img
          src="./services/servicesPoster.jpg"
          alt="Contact Poster"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-[#000000ab] flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            Our Services
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-4 max-w-2xl">
            Reach out to Nextgen (Pvt) Ltd. for expert visa consultancy, travel
            assistance, and global business expansion solutions. We're here to
            guide you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePoster;

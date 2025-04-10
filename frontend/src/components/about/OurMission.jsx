import React from 'react';
import { TiTick } from "react-icons/ti";

const tickItems = [
  'Quality and Variety',
  'Expert Guidance',
  'Sustainable Practices',
  'Experienced Team',
];
const OurMission = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-20 p-6 md:p-16 bg-white">
      {/* Left Side: text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-3xl font-bold text-[#333] mb-4">
          Our Mission
        </h2>

        <p className="text-[#454545] mb-6">
          Our mission is to make the world a greener place, one plant at a time.
          We strive to provide our customers with the highest quality plants and
          plant care products, along with the knowledge and support to help them thrive.
        </p>

        {/* Ticks mapped in two lines */}
        <div className="md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
          {tickItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-[#88AD35] rounded-full p-1">
                <TiTick className="text-white w-3 h-3" />
              </div>
              <span className="text-gray-700 font-base text-md">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: picture */}
      <div className="w-full md:w-1/2">
        <img
          src="/about/mission.jpg"
          alt="Plants in pots"
          className="rounded-md w-full h-[500px] object-cover"
        />
      </div>
    </section>
  );
};

export default OurMission;

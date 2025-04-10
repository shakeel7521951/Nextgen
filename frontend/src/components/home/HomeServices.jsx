import React from "react";
import {
  FaPassport,
  FaBriefcase,
  FaPlaneDeparture,
  FaHome,
} from "react-icons/fa";

const services = [
  // {
  //   icon: <FaHome className="text-4xl text-[#88AD35] mb-3 mx-auto" />,
  //   title: "Immigration & Settlement",
  //   desc: "Skilled migration, PR guidance, and post-landing support.",
  // },
  {
    icon: <FaPassport className="text-4xl text-[#88AD35] mb-3 mx-auto" />,
    title: "Visa Consultancy",
    desc: "Comprehensive assistance for tourist, student, business, and immigration visas.",
  },
  {
    icon: <FaBriefcase className="text-4xl text-[#88AD35] mb-3 mx-auto" />,
    title: "Business Expansion",
    desc: "Startups, market entry, and global business setup made easy.",
  },
  {
    icon: <FaPlaneDeparture className="text-4xl text-[#88AD35] mb-3 mx-auto" />,
    title: "Travel & Tourism",
    desc: "Customized travel packages, flight booking, and cultural tours.",
  },
];

const HomeServices = () => {
  return (
    <div className="container w-full mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold text-[#333] mb-12">
        Our Core Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;

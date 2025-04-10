import React from "react";
import { FaCode, FaPalette, FaCogs, FaChartBar, FaCloud } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaCode className="text-4xl text-[#86af34]" />,
    title: "Web Development",
    description:
      "Build fast, responsive, and user-friendly websites with modern technologies like React, Node, and Express.",
    buttonText: "Get in Touch",
    link:"/contact"
  },
  {
    icon: <FaPalette className="text-4xl text-[#86af34]" />,
    title: "UI/UX Design",
    description:
      "Create visually appealing and user-centric designs that deliver excellent user experiences.",
    buttonText: "Contact now",
    link:"/contact"
  },
  {
    icon: <FaCogs className="text-4xl text-[#86af34]" />,
    title: "Website Maintenance",
    description:
      "Ensure your website is always up to date with performance optimization, security patches, and regular updates.",
    buttonText: "Get in Touch",
    link:"/contact"
  },
  {
    icon: <FaChartBar className="text-4xl text-[#86af34]" />,
    title: "SEO Optimization",
    description:
      "Boost your website's search engine ranking with proven SEO strategies and techniques.",
    buttonText: "Start Now",
    link:"/contact"
  },
  {
    icon: <FaCloud className="text-4xl text-[#86af34]" />,
    title: "Cloud Solutions",
    description:
      "Leverage cloud computing for scalable and flexible solutions to host your website and applications.",
    buttonText: "Contact Us",
    link:"/contact"
  },
];

const ServicesData = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold text-center text-[#86af34] mb-10">
        Our Services
      </h2>
      <p className="text-lg text-center text-gray-600 mb-12">
        We provide a wide range of high-quality services tailored to meet your business needs. Explore our
        offerings and get in touch with us for more information.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#32363b] text-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex mb-6">
              <div className="bg-[#ecf4d3] p-4 rounded-full shadow-lg">{service.icon}</div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300 mb-5">{service.description}</p>
            <Link to={service.link}>
            <button className="bg-[#86af34] hover:bg-[#698927] text-white text-lg py-2 px-5 rounded-full transition-all duration-300">
              {service.buttonText}
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesData;

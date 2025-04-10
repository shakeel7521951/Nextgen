import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactForm = () => {
  const contactInformation = [
    {
      icon: <FaPhoneAlt className="text-3xl text-[#86af34]" />,
      title: "Phone",
      value: "555-1234-678",
    },
    {
      icon: <MdMarkEmailUnread className="text-3xl text-[#86af34]" />,
      title: "Email",
      value: "info@nextgen.com",
    },
    {
      icon: <FaLocationDot className="text-3xl text-[#86af34]" />,
      title: "Address",
      value: "Islamabad, Pakistan",
    },
  ];

  return (
    <div className="container w-full flex flex-col md:flex-row gap-10 my-16 mx-auto px-4">
      <div className="w-full md:w-1/2 mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold text-center md:text-left">Send us a Message</h1>
        <div className="mt-7 flex flex-col gap-8">
          {contactInformation.map((data, index) => (
            <div key={index} className="flex items-center gap-6 p-4 bg-[#f9f9f9] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#ECF4D3] w-20 h-20 rounded-full flex items-center justify-center p-4">
                {data.icon}
              </div>
              <div>
                <h3 className="font-semibold text-xl text-[#333]">{data.title}</h3>
                <p className="text-[#666]">{data.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 mx-auto">
        <form method="POST" className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="text-xl text-[#333]">Name*</label>
            <input
              type="text"
              name="name"
              className="border border-[#ddd] p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#86af34] transition-all duration-300"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl text-[#333]">Email*</label>
            <input
              type="email"
              name="email"
              className="border border-[#ddd] p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#86af34] transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl text-[#333]">Phone*</label>
            <input
              type="text"
              name="phone"
              className="border border-[#ddd] p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#86af34] transition-all duration-300"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xl text-[#333]">Message*</label>
            <textarea
              className="border border-[#ddd] p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#86af34] transition-all duration-300 min-h-[100px]"
              placeholder="Enter your message"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#86af34] hover:bg-[#698927] cursor-pointer transition-all duration-300 text-white py-3 px-6 text-xl rounded-full w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

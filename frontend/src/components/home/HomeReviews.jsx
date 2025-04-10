import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Malik",
    country: "Pakistan",
    rating: 5,
    review:
      "Exceptional service! The visa process was smooth and fast. Highly recommended for anyone looking to travel abroad.",
  },
  {
    name: "Ali Raza",
    country: "UAE",
    rating: 4,
    review:
      "Very professional team. They helped me settle in Canada and provided all the guidance I needed. Great experience!",
  },
  {
    name: "Meera Sharma",
    country: "India",
    rating: 5,
    review:
      "Their consultancy is trustworthy and efficient. The travel package I booked was affordable and well-organized.",
  },
];

const HomeReviews = () => {
  return (
    <div className="container w-full mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">What Our Clients Say</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Hear from people who have experienced our services first-hand.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#32363B] shadow-md hover:shadow-xl transition duration-300 rounded-2xl p-6 text-left"
          >
            <div className="mb-3 flex items-center">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-300 mb-4 italic">“{review.review}”</p>
            <h4 className="text-[#88AD35] font-semibold">{review.name}</h4>
            <span className="text-sm text-gray-200">{review.country}</span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-[#88AD35] hover:bg-[#6e8f2c] cursor-pointer text-white px-6 py-3 rounded-full font-semibold transition-all duration-200">
          Read More Reviews
        </button>
      </div>
    </div>
  );
};

export default HomeReviews;

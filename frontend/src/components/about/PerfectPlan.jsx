import React from 'react'
 
const PerfectPlan = () => {
  return (
    <div className="relative h-96 flex justify-center items-center">
    <img
      src="/about/plan.jpg"
      alt="Visa Consultancy & Travel Solutions"
      className="w-full h-96 object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
      <p className="text-white text-2xl md:text-5xl font-medium mb-2">Ready to Find your Perfect Plan?
      </p>
      <h1 className="text-white text-md md:text-xl font-light leading-tight max-w-xl mt-3">
      Browse our online store or visit us in person to experience the beauty of nature.

      </h1>
      <button className="bg-[#88AD35] hover:bg-[#6e8b2a] transition-all rounded-full cursor-pointer text-white px-6 py-3 font-semibold text-lg shadow-md mt-6">
        Shop Now
      </button>
    </div>
  </div>
  )
}

export default PerfectPlan

// import React from 'react'

// const AboutHeader = () => {
//   return (
//     <div className='relative'>
//         <img src='./about/aboutPoster.jpg' alt='About Poster' loading='lazy' className='w-full' />
//     </div>
//   )
// }

// export default AboutHeader



import React from 'react';

const AboutHeader = () => {
  return (
    <div className="relative h-[90vh] flex justify-center items-center">
      <img
        src="/about/aboutPoster.jpg"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
        <p className="text-white  md:text-lg font-medium mb-2">ABOUT</p>
        <h1 className="text-white text-xl md:text-5xl font-bold leading-tight max-w-md mb-6">
        We are Passionate About Our Work
        </h1>
      </div>
    </div>
  );
};

export default AboutHeader;


const AboutHeader = () => {
  return (
    <div className="relative h-[90vh] md:h-[100vh] max-h-[500px] flex justify-center items-center">
      <img
        src="/about/aboutPoster.jpg"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
        <p className="text-white  md:text-3xl font-medium mb-2">ABOUT</p>
        <h1 className="text-white leading-tight max-w-2xl mb-6">
        Whether you're looking for expert guidance on visa applications or need assistance with travel logistics, we are here to make your journey seamless and stress-free.
        </h1>
      </div>
    </div>
  );
};

export default AboutHeader;

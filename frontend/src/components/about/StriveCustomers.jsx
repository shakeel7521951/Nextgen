export default function StriveCustomers() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-20 p-6 md:p-16 bg-white">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2">
                <img
                    src="/about/st1.jpg"
                    alt="Plants in pots"
                    className="rounded-md w-full h-[500px] object-cover"
                />
            </div>

            {/* Right Side: Text */}
            <div className="w-full md:w-1/2">
                <h2 className="text-xl md:text-3xl font-bold text-[#333] mb-4">
                    We strive to provide our  customers with the 
                    highest quality
                </h2>

                <p className="text-[#454545] mb-6">
                    Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts
                    who recognized the positive impact that plants can have on our lives.
                    Whether it’s purifying the air, reducing stress, or simply adding a
                    touch of beauty to your environment, plants are more than just
                    decoration—they’re a lifestyle.
                </p>

                <hr className="my-6 border-gray-300" />

                {/* Quote Section */}
                <div className="mt-6">
                    {/* Quote Text */}
                    <p className="italic text-[#454545] mb-4">
                        “We love what we do & create partnerships with our clients to ensure their
                        digital transformation is positioned for long-term success.”
                    </p>

                    {/* Image and Author Info */}
                    <div className="flex items-center gap-4 mt-12">
                        <img
                            src="/about/st2.png"
                            alt="Karen Lynn"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <p className="font-bold text-[#222]">Karen Lynn</p>
                            <p className="text-[#454545] text-sm">CEO & Co-founder @ Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

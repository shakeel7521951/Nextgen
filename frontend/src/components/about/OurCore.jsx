import React from 'react'
import { FaCube } from 'react-icons/fa'

const OurCore = () => {
  return (
    <section className="bg-[#f2f8d8] py-16 px-4 md:px-8 lg:px-20 text-[#1e1e1e]">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Our Core Values that Drive<br />Everything We Do
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-10">
        {/* 1 */}
        <div className="flex items-start gap-5">
          <div className="bg-[#1e1e1e] text-white p-3 rounded-full">
            <FaCube size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Passionate About Work</h4>
            <p className="text-gray-700 text-sm">
              Passion for work is a enthusiasm and<br />excitement for what you do.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex items-start gap-5">
          <div className="bg-[#1e1e1e] text-white p-3 rounded-full">
            <FaCube size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Creative team members</h4>
            <p className="text-gray-700 text-sm">
              A creative team is to design and execute<br />campaigns & encourage
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex items-start gap-5">
          <div className="bg-[#1e1e1e] text-white p-3 rounded-full">
            <FaCube size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Innovation solutions</h4>
            <p className="text-gray-700 text-sm">
              Using either completely concepts finding<br />new ways of using existing
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex items-start gap-5">
          <div className="bg-[#1e1e1e] text-white p-3 rounded-full">
            <FaCube size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Qualitiful products</h4>
            <p className="text-gray-700 text-sm">
              Product quality refers to how well a<br />product satisfies our customer
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="flex items-start gap-5">
          <div className="bg-[#1e1e1e] text-white p-3 rounded-full">
            <FaCube size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Customer satisfaction</h4>
            <p className="text-gray-700 text-sm">
              Happy customers are delighted because<br />of the customer service
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className="flex items-start gap-5">
          <div className="bg-[#1e1e1e] text-white p-3 rounded-full">
            <FaCube size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Simplicity interface</h4>
            <p className="text-gray-700 text-sm">
              Simplicity is used loosely to refer to the<br />need to minimize a process
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCore;
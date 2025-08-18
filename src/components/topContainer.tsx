import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function TopContainer() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <div className="container-top grid grid-cols-12 gap-4 md:gap-8 items-center">
        <div className="col-span-6 max-md:col-span-12 space-y-8">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-orange-100 text-[#705c53] rounded-full text-sm font-medium mb-6">
              Welcome to AntonAxel Nigeria Company Limited
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Transforming Nigeria's Economy Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#705c53] to-[#8b6f47]">
                Innovative Solutions
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 md:mt-6 leading-relaxed">
              A versatile company offering comprehensive services across
              facility management, real estate, renewable energy, construction,
              and technology sectors.
            </p>
          </div>
          <div className="flex flex-row gap-4 animate-fade-in-up animation-delay-300">
            <button className="px-6 sm:px-4 py-2 md:py-3 bg-gradient-to-r from-[#705c53] to-[#8b6f47] text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center">
              Our Services
            </button>
            <button className="px-6 sm:px-4 py-2 md:py-3  border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-[#705c53] hover:text-[#705c53] transition-all duration-300 text-center">
              Contact Us
            </button>
          </div>
        </div>
        <div className="col-span-6 max-md:col-span-12 animate-fade-in-right mt-8 md:mt-0">
          <div className="relative mx-auto max-w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#705c53] to-[#8b6f47] rounded-2xl transform rotate-3 md:rotate-6 opacity-20"></div>
            <StaticImage
              className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 w-full"
              src="../images/service.jpg"
              alt="AntonAxel Services"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;

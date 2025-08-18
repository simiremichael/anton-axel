import React from "react";

function AboutContainer() {
  return (
    <div className="service-container bg-white">
      <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
        <div className="md:col-span-6 col-span-12 order-2 md:order-1">
          <div className="space-y-6">
            <div>
              <span className="inline-block px-4 py-2 bg-orange-100 text-[#705c53] rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Building Nigeria's Future Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#705c53] to-[#8b6f47]">
                  Innovation & Excellence
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-base md:text-lg">
                AntonAxel Nigeria Company Limited is a dynamic and multifaceted
                company delivering comprehensive solutions across multiple
                sectors of the Nigerian economy. Our commitment to excellence,
                innovation, and client satisfaction drives everything we do.
              </p>

              <p>
                We stand out through our dedication to high-quality services,
                leveraging cutting-edge technology and industry best practices.
                Our team of skilled professionals provides innovative, reliable,
                and cost-effective solutions tailored to each client's unique
                needs.
              </p>

              <p>
                Through our diverse offerings, we continue making significant
                contributions to Nigeria's economic growth while building
                lasting partnerships with clients and stakeholders nationwide.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#705c53]">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#705c53]">20+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#705c53]">8</div>
                <div className="text-sm text-gray-600">Service Areas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 order-1 md:order-2 mb-8 md:mb-0">
          <div className="relative mx-auto max-w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#705c53] to-[#8b6f47] rounded-2xl transform -rotate-3 md:-rotate-6 opacity-20"></div>
            <div className="about-container relative rounded-2xl shadow-2xl overflow-hidden w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto text-white">
                <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                  Excellence in Action
                </h3>
                <p className="text-xs md:text-sm opacity-90">
                  Transforming visions into reality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;

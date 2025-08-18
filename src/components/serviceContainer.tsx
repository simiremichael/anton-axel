import React from "react";

const services = [
  {
    title: "Facility Management",
    description: "Efficient operation and maintenance of buildings and infrastructure, ensuring optimal functionality, cleanliness, and safety through comprehensive management strategies.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16-.21 2.31-.48 3.38-.84C16.5 26.32 18.47 25 20 23.5V7l-8-5z"/>
        <path d="M12 4.5L4 8.5v8.5c0 3.5 2.5 6.5 6 7.5 3.5-1 6-4 6-7.5V8.5l-4-4z"/>
      </svg>
    ),
    gradient: "from-[#705c53] to-[#8b6f47]"
  },
  {
    title: "Real Estate",
    description: "Comprehensive property solutions including development, sales, and management across residential, commercial, and industrial sectors throughout Nigeria.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    gradient: "from-[#705c53] to-[#8b6f47]"
  },
  {
    title: "Renewable Energy",
    description: "Sustainable energy solutions focusing on solar installations, helping clients reduce traditional energy dependence while promoting eco-friendly practices.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    gradient: "from-[#705c53] to-[#8b6f47]"
  },
  {
    title: "Construction",
    description: "High-quality construction services for residential, commercial, and industrial projects, ensuring structural durability, cost-effectiveness, and safety standards.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
    gradient: "from-[#705c53] to-[#8b6f47]"
  },
  {
    title: "Project Management",
    description: "End-to-end project management ensuring timely, budget-compliant delivery. Expert resource and risk management for successful project outcomes.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    ),
    gradient: "from-[#705c53] to-[#8b6f47]"
  },
  {
    title: "Consultancy",
    description: "Expert guidance across various industries, helping businesses improve operational efficiency through tailored solutions for strategic planning and growth.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
      </svg>
    ),
    gradient: "from-[#705c53] to-[#8b6f47]"
  },
  {
    title: "General Contracting",
    description: "Comprehensive project oversight from start to finish, including material sourcing, subcontractor management, and timely project completion.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
    gradient: "from-[#705c53] to-[#8b6f47]"
  },
  {
    title: "Information Technology",
    description: "Modern IT solutions including infrastructure setup, CCTV installation, network solutions, cybersecurity, and IT consulting for business modernization.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
      </svg>
    ),
    gradient: "from-[#705c53] to-[#8b6f47]"
  }
];

function ServiceContainer() {
  return (
    <div className="service-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl max-md:text-3xl font-bold text-gray-900 mb-4">
          What We Do
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions across multiple sectors, delivering excellence and innovation in every project
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-transparent"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pallet4 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {service.description}
            </p>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-pallet4 font-semibold text-sm hover:text-amber-800 cursor-pointer">
                Learn More →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceContainer;
import React from "react";

function ServiceContainer() {
  return (
    <div className="service-container mt-10">
      <h1 className="mt-5 font-bold text-2xl">WHAT WE DO</h1>
      <div className="grid grid-cols-12 gap-2 mt-5">
        <div className="card-container lg:col-span-4 p-5 sm:col-span-6 col-span-12 bg-pallet1">
          <h2 className="font-bold text-xl mb-3 text-start max-md:text-lg">
            Facility Management
          </h2>
          <p className=" mt-5 max-xl:text-sm">
            AntonAxel handles the efficient operation and maintenance of
            buildings and infrastructure. Our facility management services
            ensure optimal functionality, cleanliness, and safety of properties
            through daily operations and long-term maintenance strategies.
          </p>
        </div>

        <div className="card-container lg:col-span-4 p-5 sm:col-span-6 col-span-12 bg-pallet1">
          <h2 className="font-bold text-xl mb-3 text-start max-md:text-lg">
            Real Estate
          </h2>
          <p className="text-md mt-5 max-xl:text-sm">
            The company offers real estate solutions, including property
            development, sales, and management. Our expertise spans residential,
            commercial, and industrial properties, catering to both private and
            corporate clients across Nigeria.
          </p>
        </div>

        <div className="card-container lg:col-span-4 p-5 sm:col-span-6 col-span-12 bg-pallet1">
          <h2 className="font-bold text-xl mb-3 text-start max-md:text-lg">
            Renewable Energy Solution
          </h2>
          <p className="text-md mt-5 max-xl:text-sm">
            AntonAxel provides renewable energy services, primarily focusing on
            solar energy installations. We help clients reduce reliance on
            traditional energy sources by implementing sustainable energy
            solutions, promoting eco-friendly practices.
          </p>
        </div>

        <div className="card-container lg:col-span-4 p-5 sm:col-span-6 col-span-12 bg-pallet1">
          <h2 className="font-bold text-xl mb-3 text-start max-md:text-lg">
            Construction
          </h2>
          <p className="text-md mt-5 max-xl:text-sm">
            AntonAxel excels in construction, delivering high-quality buildings
            for residential, commercial, and industrial purposes. Our projects
            are known for adhering to industry standards and ensuring structural
            durability, cost-effectiveness, and safety.
          </p>
        </div>

        <div className="card-container lg:col-span-4 p-5 sm:col-span-6 col-span-12 bg-pallet1">
          <h2 className="font-bold text-xl mb-3 text-start max-md:text-lg">
            Project Management
          </h2>
          <p className="text-md mt-5 max-xl:text-sm">
            The company provides end-to-end project management, ensuring
            projects are completed on time, within budget, and to client
            specifications. Our expertise in managing resources and risks
            ensures successful project outcomes.
          </p>
        </div>

        <div className="card-container lg:col-span-4 p-5 sm:col-span-6 col-span-12 bg-pallet1">
          <h2 className="font-bold text-xl mb-3 text-start max-md:text-lg">
            Consultancy
          </h2>
          <p className="text-md mt-5 max-xl:text-sm">
            AntonAxel’s consultancy services offer expert guidance across
            various industries. Our consultants help businesses improve
            operational efficiency, providing tailored solutions for strategic
            planning and business growth.
          </p>
        </div>

        <div className="card-container lg:col-span-4 p-5 sm:col-span-6 col-span-12 bg-pallet1">
          <h2 className="font-bold text-xl mb-3 text-start max-md:text-lg">
            General Contracting
          </h2>
          <p className="text-md mt-5 max-xl:text-sm">
            As general contractors, AntonAxel manages and oversees construction
            projects from start to finish. This includes sourcing materials,
            managing subcontractors, and ensuring the timely and successful
            completion of projects.
          </p>
        </div>

        <div className="card-container lg:col-span-4 p-5 sm:col-span-6 col-span-12 bg-pallet1">
          <h2 className="font-bold text-xl mb-3 text-start max-md:text-lg">
            Information Technology (IT)
          </h2>
          <p className="text-md mt-5 max-xl:text-sm">
            AntonAxel’s IT services cater to the growing technological needs of
            businesses. Our offerings include IT infrastructure setup, CCTV
            suply and installation, network solutions, cybersecurity, and IT
            consulting. These services enable businesses to modernize their
            operations, improve efficiency, and secure their digital assets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceContainer;

import React from "react";

function AboutContainer() {
  return (
    <div className="service-container mt-10 mb-5">
      <h1 className="font-bold text-2xl mb-3">ABOUT US</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-6 col-span-12 about-container"></div>
        <div className="md:col-span-6 col-span-12">
          <p className="text-md text-pallet4 font-medium max-lg:text-sm">
            AntonAxel Nigeria Company Limited is a dynamic and multifaceted
            company that offers a diverse range of services across multiple
            sectors of the Nigerian economy. With a commitment to excellence,
            innovation, and client satisfaction. We delivers comprehensive
            solutions tailored to meet the evolving needs of our clients. <br />{" "}
            AntonAxel Nigeria Company Limited stands out for its dedication to
            delivering high-quality services, leveraging the latest technology,
            and adopting industry best practices. With a team of skilled
            professionals, the company aims to provide clients with innovative,
            reliable, and cost-effective solutions across all sectors. <br />{" "}
            Through its diverse offerings, AntonAxel continues to make
            significant contributions to the growth and development of the
            Nigerian economy while building lasting partnerships with clients
            and stakeholders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;

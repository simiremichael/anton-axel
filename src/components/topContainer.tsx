import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function TopContainer() {
  return (
    <div className="grid grid-cols-12 bg-pallet2 container-top gap-2">
      <div className="col-span-6 flex flex-col justify-center max-md:col-span-12">
        <p className="mb-10 max-md:mt-5 max-md:mb-10 text-sm md:-mt-16">
          Welcome to AntonAxel Nigeria Company Limited
        </p>
        <h1 className="text-3xl font-bold max-md:text-xl">
          A versatile company offering a wide range of services tailored to
          various sectors of the Nigerian economy
        </h1>
        {/* <p>
          AntonAxel Nigeria Company Limited is a versatile company offering a
          wide range of services tailored to various sectors of the Nigerian
          economy. Their operations span across facility management, real
          estate, renewable energy solutions, construction, project management,
          consultancy, and general contracting.
        </p> */}
      </div>
      <div className="col-span-6 flex items-center max-md:col-span-12">
        <StaticImage className="" src="../images/service.jpg" alt="logo" />
      </div>
    </div>
  );
}

export default TopContainer;

import * as React from "react";
import { Link } from "gatsby";
import { Button } from "@/components/ui/button";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "./footer";
// import { Toaster } from "@/components/ui/toaster";

const Layout = ({ pageTitle, children }: any, { location }: any) => {
  const path = location.pathname;

  return (
    <div className="">
      <nav className="flex justify-between w-full items-center container">
        <Link to="/">
          <StaticImage className="w-32" src="../images/logo.svg" alt="logo" />
        </Link>
        <ul className="flex max-md:hidden">
          <li className={`${path === "/" && "font-bold"} text-pallet4 mr-8`}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${path === "/about/" && "font-bold"} text-pallet4 mr-8`}
          >
            <Link to="/about">About</Link>
          </li>
          <li className={`${path === "/contact/" && "font-bold"} text-pallet4`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Link to="/contact">
          <Button className="bg-pallet3">Contat Us</Button>
        </Link>
      </nav>
      <main>
        {/* <h1>{pageTitle}</h1> */}
        {children}
        {/* <Toaster /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

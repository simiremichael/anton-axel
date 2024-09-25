import * as React from "react";
import { Link } from "gatsby";
import { Button } from "@/components/ui/button";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "./footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Helmet } from "react-helmet";

// import { Toaster } from "@/components/ui/toaster";

const Layout = ({ pageTitle, children }: any) => {
  // const path = location.pathname;
  // console.log(path);
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <div className="">
        <nav className="flex justify-between w-full items-center container">
          <Link to="/">
            <StaticImage className="w-32" src="../images/logo.svg" alt="logo" />
          </Link>
          <ul className="flex max-md:hidden">
            <li
              className={`${
                pageTitle === "Home Page" && "font-bold"
              } text-pallet4 mr-8`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${
                pageTitle === "About Page" && "font-bold"
              } text-pallet4 mr-8`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`${
                pageTitle === "Contact Page" && "font-bold"
              } text-pallet4`}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to="/contact" className="max-md:hidden">
            <Button title="button" className="bg-pallet3">
              Contat Us
            </Button>
          </Link>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6"
                  viewBox="0 0 448 512"
                  fill="#705C53"
                  name="menu-button"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link
                  to="/"
                  className={`${
                    pageTitle === "Home Page" && "font-bold"
                  } text-pallet4 mr-8`}
                >
                  <DropdownMenuItem>Home</DropdownMenuItem>
                </Link>
                <Link
                  to="/about"
                  className={`${
                    pageTitle === "About Page" && "font-bold"
                  } text-pallet4 mr-8`}
                >
                  <DropdownMenuItem>About</DropdownMenuItem>
                </Link>
                <Link
                  to="/contact"
                  className={`${
                    pageTitle === "Contact Page" && "font-bold"
                  } text-pallet4 mr-8`}
                >
                  <DropdownMenuItem>Contact</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        <main>
          {/* <h1>{pageTitle}</h1> */}
          {children}
          {/* <Toaster /> */}
        </main>
        <footer>
          <Footer pageTitle={pageTitle} />
        </footer>
      </div>
    </>
  );
};

export default Layout;

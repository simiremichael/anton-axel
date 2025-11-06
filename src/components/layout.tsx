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
import CartIcon from "./CartIcon";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
};

const Layout = ({ children, pageTitle }: LayoutProps) => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <StaticImage
                    className="h-auto"
                    src="../images/logo.svg"
                    width={120}
                    alt="AntonAxel Logo"
                  />
                  {/* <span className="text-xl font-bold text-gray-900">AntonAxel</span> */}
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className={`${
                    pageTitle === "Home Page"
                      ? "text-pallet4 font-semibold"
                      : "text-gray-700 hover:text-pallet4"
                  } transition-colors duration-300`}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className={`${
                    pageTitle === "Products Page"
                      ? "text-pallet4 font-semibold"
                      : "text-gray-700 hover:text-pallet4"
                  } transition-colors duration-300`}
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className={`${
                    pageTitle === "About Page"
                      ? "text-pallet4 font-semibold"
                      : "text-gray-700 hover:text-pallet4"
                  } transition-colors duration-300`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-2 bg-gradient-to-r from-[#705c53] to-[#8b6f47] text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <CartIcon />
                <div className="md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 12h18M3 6h18M3 18h18" />
                      </svg>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48 mt-2">
                      <Link to="/">
                        <DropdownMenuItem
                          className={
                            pageTitle === "Home Page"
                              ? "font-semibold text-pallet4"
                              : ""
                          }
                        >
                          Home
                        </DropdownMenuItem>
                      </Link>
                      <Link to="/products">
                        <DropdownMenuItem
                          className={
                            pageTitle === "Products Page"
                              ? "font-semibold text-pallet4"
                              : ""
                          }
                        >
                          Products
                        </DropdownMenuItem>
                      </Link>
                      <Link to="/about">
                        <DropdownMenuItem
                          className={
                            pageTitle === "About Page"
                              ? "font-semibold text-pallet4"
                              : ""
                          }
                        >
                          About
                        </DropdownMenuItem>
                      </Link>
                      <Link to="/contact">
                        <DropdownMenuItem
                          className={
                            pageTitle === "Contact Page"
                              ? "font-semibold text-pallet4"
                              : ""
                          }
                        >
                          Contact
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Spacer for fixed navigation */}
        <div className="h-16"></div>

        <main>{children}</main>
        {pageTitle !== "Admin Dashboard" &&
          pageTitle !== "Shopping Cart" &&
          pageTitle !== "Payment Verification" &&
          pageTitle !== "Payment Successful" &&
          pageTitle !== "Payment Plan Confirmation" && (
            <footer>
              <Footer pageTitle={pageTitle} />
            </footer>
          )}
      </div>
    </>
  );
};

export default Layout;

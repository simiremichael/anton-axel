import ContactContainer from "@/components/contactContainer";
import Layout from "@/components/layout";
import { Link } from "gatsby";
import React from "react";

function ContactPage() {
  return (
    <Layout pageTitle="Contact Page">
      <ContactContainer />
      <div className="service-container">
        <div className="contact-left-inner-container md:ml-10 md:mt-12">
          <div className="contact-left-details-container flex-1 items-center">
            <p className="contact-left-para text-md text-pallet4 font-semibold">
              Phone:{" "}
              <Link to="tel:+2347078482944" className="ml-5 font-normal">
                07078482944
              </Link>
            </p>
            <p className="contact-left-para max-sm:mt-4 text-md text-pallet4 font-semibold">
              Email:{" "}
              <Link
                to="mailto:info@antonaxel.com.ng"
                className="ml-5 font-normal"
              >
                info@housekeeping.com.ng
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;

export const Head = () => (
  <>
    <title>Contact Me</title>
    <meta name="description" content="Your description" />
  </>
);

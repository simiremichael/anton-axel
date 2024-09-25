import ContactContainer from "@/components/contactContainer";
import Layout from "@/components/layout";
import { Link, navigate } from "gatsby";
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
              <a href="tel:+2348024990457" className="ml-5 font-normal">
                08024990457
              </a>
            </p>
            <p className="contact-left-para max-sm:mt-4 text-md text-pallet4 font-semibold">
              Email:{" "}
              <a
                href="mailto:info@antonaxel.com.ng"
                className="ml-5 font-normal"
              >
                info@antonaxel.com.ng
              </a>
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

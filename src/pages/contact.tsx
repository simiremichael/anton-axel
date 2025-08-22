import ContactContainer from "@/components/contactContainer";
import Layout from "@/components/layout";
import React from "react";

function ContactPage() {
  return (
    <Layout pageTitle="Contact Page">
      <ContactContainer />
      {/* <div className="service-container">
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
      </div> */}
    </Layout>
  );
}

export default ContactPage;

export const Head = () => (
  <>
    <title>Contact AntonAxel Nigeria | Get In Touch Today</title>
    <meta name="description" content="Contact AntonAxel Nigeria Company Limited for inquiries about our services. Reach us via phone, email, or visit our office. We're here to help with your real estate, construction, and renewable energy needs." />
    <meta name="keywords" content="contact AntonAxel, get in touch, phone number, email address, office location, customer service, Nigeria contact" />
    <meta name="author" content="AntonAxel Nigeria Company Limited" />
    <meta property="og:title" content="Contact AntonAxel Nigeria | Get In Touch Today" />
    <meta property="og:description" content="Contact AntonAxel Nigeria Company Limited for inquiries about our services. We're here to help with your business needs." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonaxel.com/contact" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Contact AntonAxel Nigeria | Get In Touch Today" />
    <meta name="twitter:description" content="Contact AntonAxel Nigeria Company Limited for inquiries about our services. We're here to help." />
    <link rel="canonical" href="https://antonaxel.com/contact" />
  </>
);

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "@/components/layout";
import TopContainer from "@/components/topContainer";
import ServiceContainer from "@/components/serviceContainer";
import AboutContainer from "@/components/aboutContainer";
import ContactContainer from "@/components/contactContainer";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <main style={pageStyles}>
        <section className="h-auto">
          <TopContainer />
        </section>
        <section className="h-auto">
          <AboutContainer />
        </section>
        <section className="h-auto">
          <ServiceContainer />
        </section>
        <section className="h-auto">
          <ContactContainer />
        </section>
        {/* <section>
          <Footer />
        </section> */}
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>
      Comprehensive Solutions in Facility, Real Estate & IT Services
    </title>
    <meta
      name="description"
      content="AntonAxel Nigeria offers services in facility management, real estate, construction, IT, renewable energy, and project management across Nigeria."
    />

    {/* <link rel="stylesheet" href="" /> */}
  </>
);

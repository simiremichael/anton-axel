import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "@/components/layout";
import TopContainer from "@/components/topContainer";
import ServiceContainer from "@/components/serviceContainer";
import AboutContainer from "@/components/aboutContainer";
import ContactContainer from "@/components/contactContainer";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <main className="overflow-hidden">
        <section className="min-h-screen flex items-center">
          <TopContainer />
        </section>
        <section className="py-20">
          <AboutContainer />
        </section>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <ServiceContainer />
        </section>
        <section className="py-20">
          <ContactContainer />
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>
      AntonAxel Nigeria | Real Estate, Facility Management, Construction &
      Renewable Energy
    </title>
    <meta
      name="description"
      content="AntonAxel Nigeria Company Limited delivers expert solutions in real estate, facility management, construction, renewable energy, IT services, and general contracting across Nigeria. Trusted, innovative, and results-driven."
    />
    <meta name="keywords" content="AntonAxel Nigeria, real estate, facility management, construction, renewable energy, solar systems, IT services, general contracting, Nigeria" />
    <meta name="author" content="AntonAxel Nigeria Company Limited" />
    <meta property="og:title" content="AntonAxel Nigeria | Real Estate, Facility Management, Construction & Renewable Energy" />
    <meta property="og:description" content="Expert solutions in real estate, facility management, construction, renewable energy, IT services, and general contracting across Nigeria." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonaxel.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="AntonAxel Nigeria | Real Estate, Facility Management, Construction & Renewable Energy" />
    <meta name="twitter:description" content="Expert solutions in real estate, facility management, construction, renewable energy, IT services, and general contracting across Nigeria." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="canonical" href="https://antonaxel.com" />
  </>
);

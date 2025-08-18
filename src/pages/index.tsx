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

    {/* <link rel="stylesheet" href="" /> */}
  </>
);

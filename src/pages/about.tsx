import AboutContainer from "@/components/aboutContainer";
import Layout from "@/components/layout";
import React from "react";

function AboutPage() {
  return (
    <Layout pageTitle="About Page">
      <AboutContainer />
    </Layout>
  );
}

export default AboutPage;

export const Head = () => (
  <>
    <title>About AntonAxel Nigeria | Our Story, Mission & Values</title>
    <meta name="description" content="Learn about AntonAxel Nigeria Company Limited - our journey, mission, values, and commitment to delivering excellence in real estate, construction, renewable energy, and facility management across Nigeria." />
    <meta name="keywords" content="about AntonAxel, company history, mission, values, Nigeria company, real estate company, construction company, renewable energy company" />
    <meta name="author" content="AntonAxel Nigeria Company Limited" />
    <meta property="og:title" content="About AntonAxel Nigeria | Our Story, Mission & Values" />
    <meta property="og:description" content="Learn about AntonAxel Nigeria Company Limited - our journey, mission, values, and commitment to delivering excellence across multiple industries." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://antonaxel.com/about" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="About AntonAxel Nigeria | Our Story, Mission & Values" />
    <meta name="twitter:description" content="Learn about AntonAxel Nigeria Company Limited - our journey, mission, values, and commitment to delivering excellence." />
    <link rel="canonical" href="https://antonaxel.com/about" />
  </>
);
